import React from "react";
import "./Experts.css";
import c1 from "../../assets/Image/c1.png"
import c2 from "../../assets/Image/c2.png";
import c3 from "../../assets/Image/c3.png";

const Experts = () => {
    return (
        <div className="experts" id='experts'>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="">
                            <h1 className="text-center title">Our Experts</h1>
                            <p className="text-center sub">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Consectetur id cum recusandae quidem, iusto hic rem totam eius!
                                Ipsam, est?
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={c1} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-text name">
                                    Amir Ahad
                                </p>
                                <p className="card-text description">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <button className="details__btn">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={c2} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-text name">
                                    MasterChef
                                </p>
                                <p className="card-text description">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <button className="details__btn">See More</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" >
                            <img src={c3} className="card-img-top" alt="..." />
                            <div className="card-body text-center">
                                <p className="card-text name">
                                    Delivary Master
                                </p>
                                <p className="card-text description">
                                    Some quick example text to build on the card title and make up
                                    the bulk of the card's content.
                                </p>
                                <button className="details__btn">See More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experts;
