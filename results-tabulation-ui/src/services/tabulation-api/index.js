import axios from 'axios';
import {TABULATION_API_URL} from "../../config";
import {getAccessToken} from "../../auth";

export const ENDPOINT_PATH_ELECTIONS = () => "/election";
export const ENDPOINT_PATH_ELECTIONS_BY_ID = (electionId) => `/election/${electionId}`;
export const ENDPOINT_PATH_ELECTION_AREA_MAP_BY_ID = (electionId) => `/election/${electionId}/area-map`;
export const ENDPOINT_PATH_AREAS = () => "/area";
export const ENDPOINT_PATH_AREAS_BY_ID = (areaId) => `/area/${areaId}`;
export const ENDPOINT_PATH_TALLY_SHEETS = () => "/tally-sheet";
export const ENDPOINT_PATH_TALLY_SHEETS_BY_ID = (tallySheetId) => `/tally-sheet/${tallySheetId}`;
export const ENDPOINT_PATH_TALLY_SHEET_VERSION_BY_ID = (tallySheetId, tallySheetCode, tallySheetVersionId) => {
    let path = `/tally-sheet/${tallySheetId}/version`;
    if (tallySheetVersionId) {
        path += `/${tallySheetVersionId}`;
    }

    return path;
};
export const ENDPOINT_PATH_TALLY_SHEET_WORKFLOW = (tallySheetId) => `/tally-sheet/${tallySheetId}/workflow`;
export const ENDPOINT_PATH_TALLY_SHEET_VERSION_HTML = (tallySheetId, tallySheetVersionId) => `/tally-sheet/${tallySheetId}/version/${tallySheetVersionId}/html`;
export const ENDPOINT_PATH_TALLY_SHEET_VERSION_PDF = (tallySheetId, tallySheetVersionId) => `/tally-sheet/${tallySheetId}/version/${tallySheetVersionId}/pdf`;
export const ENDPOINT_PATH_TALLY_SHEET_VERSION_LETTER_HTML = (tallySheetId, tallySheetVersionId) => `/tally-sheet/${tallySheetId}/version/${tallySheetVersionId}/letter/html`;
export const ENDPOINT_PATH_TALLY_SHEET_VERSION_LETTER_PDF = (tallySheetId, tallySheetVersionId) => `/tally-sheet/${tallySheetId}/version/${tallySheetVersionId}/letter/pdf`;

export const ENDPOINT_PATH_TALLY_SHEET_PROOF = (tallySheetId, proofId) => `/tally-sheet/${tallySheetId}/workflow/proof/${proofId}`;
export const ENDPOINT_PATH_TALLY_SHEET_WORKFLOW_LOGS = (tallySheetId) => `/tally-sheet/${tallySheetId}/workflow/logs`;
export const ENDPOINT_PATH_TALLY_SHEET_PROOF_FINISH = (proofId) => `/proof/${proofId}/finish`;
export const ENDPOINT_PATH_FILE = (tallySheetId, fileId) => `/tally-sheet/${tallySheetId}/workflow/proof/file/${fileId}`;
export const ENDPOINT_PATH_FILE_DOWNLOAD = (tallySheetId, fileId) => `/tally-sheet/${tallySheetId}/workflow/proof/file/${fileId}/download`;


const axiosInstance = axios.create({
    baseURL: TABULATION_API_URL,
    headers: {
        // 'Authorization': "Bearer " + getAccessToken(),
        'X-Jwt-Assertion': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3JvbGUiOlsidGFiX2FkbWluIiwidGFiX2RhdGFfZWRpdG9yIiwidGFiX3BvbF9kaXZfcmVwX3ZpZXciLCJ0YWJfcG9sX2Rpdl9yZXBfdmVyZiIsInRhYl9hZG1fZGlzX3JlcF92aWV3IiwidGFiX2FkbV9kaXNfcmVwX3ZlcmYiLCJ0YWJfcHJvdl9yZXBfdmlldyIsInRhYl9wcm92X2Rpc19yZXBfdmVyZiIsInRhYl9uYXRfZGlzX3JlcF92aWV3IiwidGFiX25hdF9kaXNfcmVwX3ZlcmYiLCJ0YWJfZWNfbGVhZGVyc2hpcCJdLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3VzZXJuYW1lIjoiamFuYWtAY2FyYm9uLnN1cGVyIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9hZG1pbiI6IltdIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9kYXRhX2VkaXRvciI6Ilt7J2FyZWFJZCc6IDQwNzQxLCAnYXJlYU5hbWUnOiAnMDEgLSBDb2xvbWJvJ31dIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9wb2xfZGl2X3JlcF92aWV3IjoiW3snYXJlYUlkJzogNDA3NDEsICdhcmVhTmFtZSc6ICcwMSAtIENvbG9tYm8nfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX3BvbF9kaXZfcmVwX3ZlcmYiOiJbeydhcmVhSWQnOiA0MDc0MSwgJ2FyZWFOYW1lJzogJzAxIC0gQ29sb21ibyd9XSIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXJlYV9hc3NpZ25fYWRtX2Rpc19yZXBfdmlldyI6Ilt7J2FyZWFJZCc6IDQwNzQxLCAnYXJlYU5hbWUnOiAnMDEgLSBDb2xvbWJvJ31dIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9hZG1fZGlzX3JlcF92ZXJmIjoiW3snYXJlYUlkJzogNDA3NDEsICdhcmVhTmFtZSc6ICcwMSAtIENvbG9tYm8nfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX3Byb3ZfcmVwX3ZpZXciOiJbeydhcmVhSWQnOiA0MDc0MCwgJ2FyZWFOYW1lJzogJ1dlc3Rlcm4nfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX3Byb3ZfZGlzX3JlcF92ZXJmIjoiW3snYXJlYUlkJzogNDA3NDAsICdhcmVhTmFtZSc6ICdXZXN0ZXJuJ31dIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9uYXRfZGlzX3JlcF92aWV3IjoiW3snYXJlYUlkJzogNDA3MzksICdhcmVhTmFtZSc6ICdTcmkgTGFua2EnfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX25hdF9kaXNfcmVwX3ZlcmYiOiJbeydhcmVhSWQnOiA0MDczOSwgJ2FyZWFOYW1lJzogJ1NyaSBMYW5rYSd9XSIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXJlYV9hc3NpZ25fZWNfbGVhZGVyc2hpcCI6Ilt7J2FyZWFJZCc6IDQwNzM5LCAnYXJlYU5hbWUnOiAnU3JpIExhbmthJ31dIn0.t5BbxvdFAwebdKhVnBwT33SaJKzA7wNAhbOZiiWIWzU',
        // 'X-Jwt-Assertion': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3JvbGUiOlsidGFiX2FkbWluIiwidGFiX2RhdGFfZWRpdG9yIiwidGFiX3BvbF9kaXZfcmVwX3ZpZXciLCJ0YWJfcG9sX2Rpdl9yZXBfdmVyZiIsInRhYl9hZG1fZGlzX3JlcF92aWV3IiwidGFiX2FkbV9kaXNfcmVwX3ZlcmYiLCJ0YWJfcHJvdl9yZXBfdmlldyIsInRhYl9wcm92X2Rpc19yZXBfdmVyZiIsInRhYl9uYXRfZGlzX3JlcF92aWV3IiwidGFiX25hdF9kaXNfcmVwX3ZlcmYiLCJ0YWJfZWNfbGVhZGVyc2hpcCJdLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL3VzZXJuYW1lIjoiamFuYWtAY2FyYm9uIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9hZG1pbiI6IltdIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9kYXRhX2VkaXRvciI6Ilt7J2FyZWFJZCc6IDQwNzQxLCAnYXJlYU5hbWUnOiAnMDEgLSBDb2xvbWJvJ31dIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9wb2xfZGl2X3JlcF92aWV3IjoiW3snYXJlYUlkJzogNDA3NDEsICdhcmVhTmFtZSc6ICcwMSAtIENvbG9tYm8nfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX3BvbF9kaXZfcmVwX3ZlcmYiOiJbeydhcmVhSWQnOiA0MDc0MSwgJ2FyZWFOYW1lJzogJzAxIC0gQ29sb21ibyd9XSIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXJlYV9hc3NpZ25fYWRtX2Rpc19yZXBfdmlldyI6Ilt7J2FyZWFJZCc6IDQwNzQxLCAnYXJlYU5hbWUnOiAnMDEgLSBDb2xvbWJvJ31dIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9hZG1fZGlzX3JlcF92ZXJmIjoiW3snYXJlYUlkJzogNDA3NDEsICdhcmVhTmFtZSc6ICcwMSAtIENvbG9tYm8nfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX3Byb3ZfcmVwX3ZpZXciOiJbeydhcmVhSWQnOiA0MDc0MCwgJ2FyZWFOYW1lJzogJ1dlc3Rlcm4nfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX3Byb3ZfZGlzX3JlcF92ZXJmIjoiW3snYXJlYUlkJzogNDA3NDAsICdhcmVhTmFtZSc6ICdXZXN0ZXJuJ31dIiwiaHR0cDovL3dzbzIub3JnL2NsYWltcy9hcmVhX2Fzc2lnbl9uYXRfZGlzX3JlcF92aWV3IjoiW3snYXJlYUlkJzogNDA3MzksICdhcmVhTmFtZSc6ICdTcmkgTGFua2EnfV0iLCJodHRwOi8vd3NvMi5vcmcvY2xhaW1zL2FyZWFfYXNzaWduX25hdF9kaXNfcmVwX3ZlcmYiOiJbeydhcmVhSWQnOiA0MDczOSwgJ2FyZWFOYW1lJzogJ1NyaSBMYW5rYSd9XSIsImh0dHA6Ly93c28yLm9yZy9jbGFpbXMvYXJlYV9hc3NpZ25fZWNfbGVhZGVyc2hpcCI6Ilt7J2FyZWFJZCc6IDQwNzM5LCAnYXJlYU5hbWUnOiAnU3JpIExhbmthJ31dIn0.q9F2tF1gc2WJ_cQgq62VeSUURgmxWVPfm5QLV5g63cE',
        // 'X-Jwt-Assertion': window.prompt("'X-Jwt-Assertion': "),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Cache-Control': 'no-store',
        'Pragma': 'no-cache',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

export function request(config) {
    return axiosInstance.request(config).then((res) => res.data)
}


export function getAreas({electionId, associatedAreaId, areaType, limit = 10000, offset = 0}) {
    return request({
        url: ENDPOINT_PATH_AREAS(),
        method: 'get', // default,
        params: {electionId, associatedAreaId, areaType, limit, offset}
    })
}





