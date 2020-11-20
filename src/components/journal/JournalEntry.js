import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={
                    {
                        backgroundSize: 'cover',
                        backgroundImage: 'url(https://www.cloudcms.com/images/quickstarts/react/react.df70b005.png)'
                    }
                }
            >
            </div>
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Curso de React
                </p>
                <p className="journal__entry-content">
                Hasta un nivel competitivo en el ambiente laboral de hoy en día.
                </p>

            </div>
            <div className="journal__entry-date-box">
                <span>
                    Monday!
                </span>
                <h4>
                    16
                </h4>
            </div>
        </div>
    )
}
