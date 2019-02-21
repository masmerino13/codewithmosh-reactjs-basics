import * as Sentry from '@sentry/browser';

function init() {
    Sentry.init({
        dsn: 'https://3f34ecdc91db470b95108acc74442bac@sentry.io/1398838',
        release: '0.0.1',
        environment: 'development'
    });
}

function log(error) {
    Sentry.captureException(error);
}

export default {
    init,
    log
}