import React from "react";
import { parseHtml } from "../../../Utils/utils";

const keyValue = '';
const Intro = ({ introData, activeYear }) => {

    const aboutUs = introData.data && introData.data.filter((item) => {
        return activeYear ? item.id == activeYear : introData.data[0]
    });


    return (<>
        {aboutUs && aboutUs.map((item) =>

            <>
                <div className="col-md-6">
                    <h2 className="mb-4"><span className="text-orange">{item.title}</span></h2>
                    <p>{parseHtml(item.description)} </p>

                    {JSON.parse(item.key_highlights).center &&
                        <>
                            <p className="big">Key Highlights</p>

                            <ul className="highlights">
                                <li>
                                    <span>Number of centers </span>
                                    <span>: {JSON.parse(item.key_highlights).center}</span>
                                </li>
                                <li>
                                    <span>Revenue</span>
                                    <span>: Rs.{JSON.parse(item.key_highlights).revenue} Crores</span>
                                </li>
                                <li>
                                    <span>Number of students</span>
                                    <span>: {JSON.parse(item.key_highlights).students}+</span>
                                </li>
                            </ul>
                        </>

                    }
                </div>

                <div className="col-md-6 text-center">
                    <img src={item.image} alt="illustration" />
                </div></>
        )
        }
    </>);
}

export default Intro;