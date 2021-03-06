from flask import render_template

from ext.ExtendedElection.ExtendedElectionProvincialCouncilElection2021.TEMPLATE_ROW_TYPE import \
    TEMPLATE_ROW_TYPE_ELECTED_CANDIDATE
from ext.ExtendedTallySheet import ExtendedTallySheetReport
from util import convert_image_to_data_uri


class ExtendedTallySheet_PCE_PC_CD(ExtendedTallySheetReport):
    def on_get_release_result_params(self):
        pd_code = None
        pd_name = None
        ed_code = None
        ed_name = None

        result_type = "RN_SCNC"
        result_code = "FINAL"
        result_level = "PROVINCIAL"

        return result_type, result_code, result_level, ed_code, ed_name, pd_code, pd_name

    class ExtendedTallySheetVersion(ExtendedTallySheetReport.ExtendedTallySheetVersion):
        def json(self):
            extended_tally_sheet = self.tallySheet.get_extended_tally_sheet()
            result_type, result_code, result_level, ed_code, ed_name, pd_code, pd_name = extended_tally_sheet.on_get_release_result_params()

            candidate_wise_results = self.get_candidate_wise_results().sort_values(
                by=['electionPartyId', "candidateId"], ascending=[True, True]
            ).reset_index()

            return {
                "type": result_type,
                "level": result_level,
                "by_candidate": [
                    {
                        "party_code": candidate_wise_result.partyAbbreviation,
                        "party_name": candidate_wise_result.partyName,
                        "candidate_number": candidate_wise_result.candidateNumber,
                        "candidate_name": candidate_wise_result.candidateName,
                        "candidate_type": candidate_wise_result.candidateType
                    } for candidate_wise_result in candidate_wise_results.itertuples()
                ]
            }

        def get_candidate_wise_results(self):
            elected_candidates = self.df.loc[
                (self.df['templateRowType'] == TEMPLATE_ROW_TYPE_ELECTED_CANDIDATE) & (self.df['numValue'] == 0)]

            elected_candidates = elected_candidates.sort_values(
                by=['partyId', 'candidateId'], ascending=True
            ).reset_index()

            return elected_candidates

        def html(self, title="", total_registered_voters=None):
            tallySheetVersion = self.tallySheetVersion
            stamp = tallySheetVersion.stamp

            content = {
                "election": {
                    "electionName": tallySheetVersion.tallySheet.election.get_official_name(),
                    "provinceName": tallySheetVersion.tallySheet.area.areaName
                },
                "stamp": {
                    "createdAt": stamp.createdAt,
                    "createdBy": stamp.createdBy,
                    "barcodeString": stamp.barcodeString
                },
                "data": [],
                "logo": convert_image_to_data_uri("static/Emblem_of_Sri_Lanka.png"),
                "date": stamp.createdAt.strftime("%d/%m/%Y"),
                "time": stamp.createdAt.strftime("%H:%M:%S %p")
            }

            candidate_wise_results = self.get_candidate_wise_results()

            for candidate_wise_result in candidate_wise_results.itertuples():
                data_row = [
                    candidate_wise_result.partyName,
                    candidate_wise_result.partyAbbreviation,
                    candidate_wise_result.areaName,
                    candidate_wise_result.candidateNumber,
                    candidate_wise_result.candidateName
                ]

                content["data"].append(data_row)

            html = render_template(
                'ProvincialCouncilElection2021/PCE-PC-CD.html',
                content=content
            )

            return html

        def html_letter(self, title="", total_registered_voters=None, signatures=[]):
            tallySheetVersion = self.tallySheetVersion
            stamp = tallySheetVersion.stamp

            content = {
                "election": {
                    "electionName": tallySheetVersion.tallySheet.election.get_official_name(),
                    "provinceName": tallySheetVersion.tallySheet.area.areaName
                },
                "stamp": {
                    "createdAt": stamp.createdAt,
                    "createdBy": stamp.createdBy,
                    "barcodeString": stamp.barcodeString
                },
                "signatures": signatures,
                "data": [],
                "logo": convert_image_to_data_uri("static/Emblem_of_Sri_Lanka.png"),
                "date": stamp.createdAt.strftime("%d/%m/%Y"),
                "time": stamp.createdAt.strftime("%H:%M:%S %p")
            }

            candidate_wise_results = self.get_candidate_wise_results()

            for candidate_wise_result in candidate_wise_results.itertuples():
                data_row = [
                    candidate_wise_result.partyName,
                    candidate_wise_result.partyAbbreviation,
                    candidate_wise_result.areaName,
                    candidate_wise_result.candidateNumber,
                    candidate_wise_result.candidateName
                ]

                content["data"].append(data_row)

            html = render_template(
                'ProvincialCouncilElection2021/PCE-PC-CD-LETTER.html',
                content=content
            )

            return html
