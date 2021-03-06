import React, { Component } from 'react' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class ContractInfo extends Component {
 
    render(){

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const headerStyle ={ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#eee97f", textAlign: "center", fontWeight: "bold", fontSize: "21px" };
        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={headerStyle}>
                            Smart Contract</div>
                        <br />

                        <div className="col-xl-12" style={{ textAlign: "center" }}>
          
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract BOND Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.contract_rt_balance } BOND  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract USDT Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.contract_tusd_balance } USDT </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Number of Purchases</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> # {this.props._total_no_purchases }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Users</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> # {this.props.contract_total_users }  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total USDT Withdrawn</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props._total_usd_withdrawn } USDT  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Pool Balance</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.pool_balance } USDT  </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>No. of Pool Cycles</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}># {this.props.pool_cycle }    </a>
                            <br /><br />
                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Next Draw (Top)</p>
                            <a href="#1" style={{ color: "#eee97f", fontSize: "15px", textAlign: "center" }}> {this.props.draw_hrs }h : {this.props.draw_mins }m : {this.props.draw_secs }s</a>
                            <br /><br />

                            
                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default ContractInfo
