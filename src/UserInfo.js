import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class UserInfo extends Component {
 
    render(){

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const headerStyle ={ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#1AE865", textAlign: "center", fontWeight: "bold", fontSize: "21px" };
        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            User Stats</div>
                        <br /> 

                        <div className="col-xl-12" style={{ textAlign: "center" }}>
          
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Upline</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "17px", textAlign: "center" }}> {this.props.upline }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> Withdrawable USDT Balance</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "20px", textAlign: "center" }}> {this.props.tusd_balance }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}> Number of Purchases</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "20px", textAlign: "center" }}> {this.props.no_of_purchases }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Direct Business</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "20px", textAlign: "center" }}> {this.props.direct_biz }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Pool Bonus</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "20px", textAlign: "center" }}> {this.props.pool_bonus }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Generation Bonus</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "20px", textAlign: "center" }}> {this.props.gen_bonus }  </a>
                            <br /><br /> 
                            
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default UserInfo
