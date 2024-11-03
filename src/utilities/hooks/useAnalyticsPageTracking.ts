import { useEffect } from 'react';
import { analytics, logEvent } from '../../firebase';

export const useAnalyticsPageTracking = (pageName: string)=> {

    useEffect(() => {
        logEvent(analytics, pageName);
        // console.log('page tracker ==>', pageName);
    }, [pageName]);

}