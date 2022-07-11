import React from "react";


function TipBox({warning}) {


    return (
        <>
            <div class="tip-box">

                <img src={require(warning.icon)} />

                <div class="tip">
                    <p class="tip-header">
                        {warning.warningName}
                    </p>

                    <p class="tip-info">
                        {warning.warningMessage}
                    </p>

                </div>

            </div>
        </>
    )

}

export default TipBox