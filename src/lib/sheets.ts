import axios from 'axios';

// Replace with your Google Apps Script web app URL
const SHEETS_API_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

export const submitToSheets = async (data: any, sheetName: string) => {
  try {
    await axios.post(SHEETS_API_URL, {
      data,
      sheet: sheetName
    });
    return true;
  } catch (error) {
    console.error('Error submitting to sheets:', error);
    return false;
  }
};