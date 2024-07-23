import React, { useState } from 'react';
import axios from 'axios';
import './PracticeTestMenu.css';

const PracticeTestMenu = () => {
    const [htmlContent, setHtmlContent] = useState('');
    const [selectedSection, setSelectedSection] = useState(null);
    const [loading, setLoading] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    const handleMenuMouseEnter = (section) => {
        setOpenSubMenu(section);
    };

    const handleMenuMouseLeave = () => {
        setOpenSubMenu(null);
    };

    const handleSubMenuClick = async (section, isLongRunning = false) => {
        try {
            setLoading(isLongRunning);
            const response = await axios.get(`http://127.0.0.1:8000/${section}`, {
                headers: { 'Content-Type': 'text/html' },
                responseType: 'text'
            });
            setTimeout(() => { // Simulate long-running API
                setLoading(false);
                setHtmlContent(response.data);
            }, isLongRunning ? 3000 : 0);
            setSelectedSection(section); // Mark submenu item as selected
            setOpenSubMenu(null); // Close the submenu
        } catch (error) {
            console.error('Error fetching content:', error);
            setHtmlContent('<p>Failed to load content.</p>');
            setOpenSubMenu(null); // Close the submenu
        }
    };

    const getIcon = (name) => {
        switch (name) {
            case 'next':
                return '➡️';
            case 'tips':
                return '💡';
            case 'regenerate':
                return '🔄';
            default:
                return '';
        }
    };

    return (
        <div className="practice-container">
            <nav className="practice-menu">
                <ul>
                    <li
                        onMouseEnter={() => handleMenuMouseEnter('reading')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        <button className={openSubMenu === 'reading' ? 'active' : ''}>
                            Reading
                        </button>
                        {openSubMenu === 'reading' && (
                            <ul className="submenu visible">
                                <li>
                                    <button onClick={() => handleSubMenuClick('reading', false)}>
                                        <span title="Question">{getIcon('next')} Question</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('reading_tips', false)}>
                                        <span title="Tips and Tricks">{getIcon('tips')} Tips and Tricks</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('reading_regenerate', true)}>
                                        <span title="Regenerate">{getIcon('regenerate')} Regenerate</span>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMenuMouseEnter('writing')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        <button className={openSubMenu === 'writing' ? 'active' : ''}>
                            Writing
                        </button>
                        {openSubMenu === 'writing' && (
                            <ul className="submenu visible">
                                <li>
                                    <button onClick={() => handleSubMenuClick('writing', false)}>
                                        <span title="Question">{getIcon('next')} Question</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('writing_tips', false)}>
                                        <span title="Tips and Tricks">{getIcon('tips')} Tips and Tricks</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('writing_regenerate', true)}>
                                        <span title="Regenerate">{getIcon('regenerate')} Regenerate</span>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMenuMouseEnter('math_nocalc')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        <button className={openSubMenu === 'math_nocalc' ? 'active' : ''}>
                            Math (No Calculator)
                        </button>
                        {openSubMenu === 'math_nocalc' && (
                            <ul className="submenu visible">
                                <li>
                                    <button onClick={() => handleSubMenuClick('math_nocalc', false)}>
                                        <span title="Question">{getIcon('next')} Question</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('math_nocalc_tips', false)}>
                                        <span title="Tips and Tricks">{getIcon('tips')} Tips and Tricks</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('math_nocalc_regenerate', true)}>
                                        <span title="Regenerate">{getIcon('regenerate')} Regenerate</span>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMenuMouseEnter('math_calc')}
                        onMouseLeave={handleMenuMouseLeave}
                    >
                        <button className={openSubMenu === 'math_calc' ? 'active' : ''}>
                            Math (Calculator)
                        </button>
                        {openSubMenu === 'math_calc' && (
                            <ul className="submenu visible">
                                <li>
                                    <button onClick={() => handleSubMenuClick('math_calc', false)}>
                                        <span title="Question">{getIcon('next')} Question</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('math_calc_tips', false)}>
                                        <span title="Tips and Tricks">{getIcon('tips')} Tips and Tricks</span>
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => handleSubMenuClick('math_calc_regenerate', true)}>
                                        <span title="Regenerate">{getIcon('regenerate')} Regenerate</span>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
            <div className="practice-content">
                {loading ? (
                    <div className="loading-animation">
                        <div className="spinner"></div>
                        <p>Loading...This may take 10-15 minutes</p>
                    </div>
                ) : (
                    <iframe
                        srcDoc={htmlContent}
                        title="Practice Test Content"
                        style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                )}
            </div>
        </div>
    );
};

export default PracticeTestMenu;
