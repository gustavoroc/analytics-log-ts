import { ErrorAnalytics } from "../analytics/error-analytics";
import { Analytics } from "../analytics/analytics";

export class MongoAnalyticsRepository implements ErrorAnalytics, ErrorAnalytics {
    saveError (error: any): void {
        // Uso da bibliotéca // 
    }

    save (type: string, data: any): void {

    }
}