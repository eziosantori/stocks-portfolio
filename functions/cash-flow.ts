
import { Handler } from "@netlify/functions";
import getCashFlow  from "./stocks/getCashFlow";

  export const handler: Handler = async (event, context, callback): Promise<any> => {
    if (event.httpMethod === 'GET') {
        return await getCashFlow(event,context, callback);
    // } else if (event.httpMethod === 'POST') {
    //     return await createCourse(event);
    // } else if (event.httpMethod === 'PUT') {
    //     return await updateCourse(event);
    // } else if (event.httpMethod === 'DELETE') {
    //     return await deleteCourse(event);
    } else {
      return {
        statusCode: 405,
        body: JSON.stringify("Error"),
      };
    }
};