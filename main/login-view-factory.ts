import { ActionLog } from "../analytics/action-log";
import { ErrorLog } from "../analytics/error-log";
import { LogStrategy } from "../analytics/log-strategy";
import { ScreenLog } from "../analytics/screen-log";
import { FirebaseAdapter } from "../infra/firebase-adapter";
import { SentryAdapter } from "../infra/sentry-adapter";
import { LoginView } from "../presentation/login-view";

export const makeLoginView = (): LoginView => {
    const sentryAdapter = new SentryAdapter();
    const firebaseAdapter = new FirebaseAdapter();
    const errorLog = new ErrorLog(sentryAdapter)
    const actionLog = new ActionLog(firebaseAdapter)
    const screenLog = new ScreenLog(firebaseAdapter)

    const logStrategy = new LogStrategy(errorLog, actionLog, screenLog);

    return new LoginView(logStrategy);
}