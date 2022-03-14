import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure();

export class Invest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0, 
        }

        // this.button100 = this.button100.bind(this);
        // this.button500 = this.button500.bind(this);
        // this.button1000 = this.button1000.bind(this);
        // this.button10k = this.button10k.bind(this);
        // this.button50k = this.button50k.bind(this);
        // this.button100k = this.button100k.bind(this);
        // this.button500k = this.button500k.bind(this);
        this.purchase1 = this.purchase1.bind(this);
        // this.reset = this.reset.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
    }

    async purchase1(refid, amount) {
        const { contractInstance } = await getBlockchain();

        if (amount >= 20) {
            let amt = Number(amount).toFixed();
            amt = amt + "000000000000000000";

            await contractInstance
                .purchase(refid, amt)
                .then(res => toast.success(amount + ' USDT worth of token purchase processing, please do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 10000 })

                ).then(res => {
                    setInterval(() => {
                        window.location = "/";
                    }, 12000);
                }).catch(err => toast.error(err+ " Unknown error"));
        } else {
            toast.info('Minimum purchase allowed is 20 USDT');
        } 
    }

    updateAddress(event){
        this.setState({sendAddress : event.target.value })
    }

    // button100(event) {
    //     this.setState({ count: this.state.count + 100 });
    // }

    // button500(event) {
    //     this.setState({ count: this.state.count + 500 });
    // }

    // button1000(event) {
    //     this.setState({ count: this.state.count + 1000 });
    // }

    // button10k(event) {
    //     this.setState({ count: this.state.count + 10000 });
    // }

    // button50k(event) {
    //     this.setState({ count: this.state.count + 50000 });
    // }

    // button100k(event) {
    //     this.setState({ count: this.state.count + 100000 });
    // }

    // button500k(event) {
    //     this.setState({ count: this.state.count + 500000 });
    // }

    // reset(event) {
    //     this.setState({ count: 0 });
    // }

    render() {

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        // const addButton = {
        //     display: "inline-block",
        //     padding: "0.5em 1em",
        //     textDecoration: "none",
        //     color: "#FFF",
        //     transition: ".4s", marginTop: "10px", marginLeft: "10px", marginBottom: "10px", fontWeight: "3px", border: "3px solid white", backgroundColor: "black"
        // }

        const purchaseButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "black",
            transition: ".4s", marginTop: "30px", marginBottom: "-22px", fontWeight: "bold", fontFamily: "MyFont", textAlign: "center", backgroundImage: "linear-gradient(to right, #FFDD00, #FBB034)", fontSize: "18px", borderRadius: "30px", marginLeft: "150px"
        };

        return (
            <div style={{ paddingTop: "60px" }} >
                <div className="row">
                    <div className="col-xl-4"></div>
                    <div className="col-xl-4" style={colStyle}>


                        <div className="col-xl-12" style={{ marginTop: "-18px", marginLeft: "-5px", backgroundImage: "linear-gradient(to right, #131050, black)", borderRadius: "5px", color: "#2DE1EE", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                           Purchase Section</div>
                        <br />
                        <form
                            onSubmit={(event) => {

                                event.preventDefault();
                                const refid = this.props.refid;
                                const amount = Number(this.props.usdApproved).toFixed(0);

                                if (amount >= 20) {
                                    this.purchase1(refid, amount);

                                } else {
                                    toast.error("Min deposit is 20 USDT");
                                } 
                            }} 
                        >   
                            <label style={{color: "white"}}>Referral Address</label>
                            <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "White", fontSize: "15px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} 
                            onChange= { this.updateAddress  } placeholder={this.props.refid} /> <br /><br />

                            <label style={{color: "white"}}>USD Approved Amount </label>
                            <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "White", fontSize: "15px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} value={Number(this.props.usdApproved).toFixed(0)} /> <br /><br />  


                            {/* <a href="#100" className="btn btn-primary" style={addButton} onClick={this.button100}>+100</a> 
                            <a href="#500" className="btn btn-primary" style={addButton} onClick={this.button500}>+500</a> 
                            <a href="#1000" className="btn btn-primary" style={addButton} onClick={this.button1000}>+1000</a> 
                            <a href="#10000" className="btn btn-primary" style={addButton} onClick={this.button10k}>+10k</a> 
                            <a href="#50000" className="btn btn-primary" style={addButton} onClick={this.button50k}>+50 k</a>
                            <a href="#100000" className="btn btn-primary" style={addButton} onClick={this.button100k}>+100 k</a>
                            <a href="#500000" className="btn btn-primary" style={addButton} onClick={this.button500k}>+500 k</a>
                            <a href="#reset" className="btn btn-primary" style={addButton} onClick={this.reset}>Reset</a><br /> */}
                            
                            <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "15px" }}>USD Approved : {Number(this.props.usdApproved).toFixed(0)} USDT</p>
                             
 
                            <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "15px" }}>Your BOND Balance : {this.props.rtBal} BOND</p>
                            

                            <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "15px" }}>Contract token Balance : {this.props.contractRTBal} tokens</p>

                            <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "14px" }}>BOND Balance : {this.props.rtBal} BOND </p>
                            <button type="submit" className="btn btn-success" style={purchaseButton}>Purchase</button> 
 
                        </form>


                    </div>

                    <div className="col-xl-4"></div>
                </div>

            </div>
        )
    }
}

export default Invest
