// PasswordProtectedPage.js
import React, { useState } from 'react';

function PasswordProtectedPage({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkPassword = () => {
        const password = prompt('password:');
        if (password === 'lincoln') {
            setIsAuthenticated(true);
        } else {
            alert('sorry');
        }
    };

    if (!isAuthenticated) {
        checkPassword();
        return null; // 防止未经验证的用户看到内容
    }

    return <div>{children}</div>;
}

export default PasswordProtectedPage;
