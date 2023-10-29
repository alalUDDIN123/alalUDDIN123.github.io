
import { useEffect } from 'react';

const ComeBackIndicate = () => {
    useEffect(() => {
        let originalTitle = document.title
        // Event handler for tab switching
        const handleVisibilityChange = () => {
            if (document.hidden) {
                // Tab is hidden (user switched tabs)
                document.title = 'Come back 🤚🤚🤚';
            } else {
                // Tab is visible again (user returned to the tab)
                document.title = originalTitle;
            }
        };

        // Attach the visibilitychange event listener for tab switching
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return null
}

export default ComeBackIndicate