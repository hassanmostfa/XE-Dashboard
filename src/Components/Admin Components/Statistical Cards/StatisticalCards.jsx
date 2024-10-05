import React from "react";
import "./StatisticalCards.css";
const StatisticalCards = () => {
    return (
    <div className="StatisticalCards w-100">
        <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">

            {/* Box 1 */}
        <div className="box d-flex justify-content-center gap-3 align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <span className="text-muted fs-6 mb-2 text-center">الارباح</span>
                <p> <span>10000</span> جم</p>
            </div>
            <i class="fa fa-usd" aria-hidden="true"></i>
        </div>

            {/* Box 2 */}
        <div className="box d-flex justify-content-center gap-3 align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <span className="text-muted fs-6 mb-2 text-center">عدد المستخدمين</span>
                <p> <span>10000</span> جم</p>
            </div>
            <i class="fa fa-user" aria-hidden="true"></i>
        </div>


            {/* Box 3 */}
        <div className="box d-flex justify-content-center gap-3 align-items-center">
            <div className="d-flex flex-column align-items-center justify-content-center">
                <span className="text-muted fs-6 mb-2 text-center">الكورس الاكثر مبيعا</span>
                <p> <span>10000</span> جم</p>
            </div>
            <i class="fa fa-clipboard" aria-hidden="true"></i>
        </div>


        </div>
    </div>
    );
};

export default StatisticalCards;
