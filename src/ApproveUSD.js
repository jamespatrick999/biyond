import React, { Component } from 'react'
import getBlockchain from './ethereum.js';
// import { ethers } from 'ethers'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

toast.configure(); 

export class ApproveUSD extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0, 
            contractAddress: '0x60Cd8C46747A1E94Fd30B65A984435f08D61e5Cc'
        }
        
        this.button10 = this.button10.bind(this); 
        this.button20 = this.button20.bind(this); 
        this.button50 = this.button50.bind(this);
        this.button100 = this.button100.bind(this);
        this.button500 = this.button500.bind(this);
        this.button1000 = this.button1000.bind(this);
        this.button5000 = this.button5000.bind(this);
        this.firstAllowance = this.firstAllowance.bind(this);
        this.nextAllowance = this.nextAllowance.bind(this);
        this.reset = this.reset.bind(this); 
    }

    async firstAllowance(spender, amount) {
        const { usdtInstance } = await getBlockchain();

        if (amount >= 20) {
             
            let amt = Number(amount).toFixed();
            amt = amt + "000000000000000000";
            console.log(typeof amt ); 

            // // let amt1 = amt.toLocaleString();
            // // console.log( amt1 ); 
            // // amt = amt.toLocaleString('fullwide', {useGrouping:false})
            // // console.log( amt); 

            // const myNumb = 1000000000000000000000;
            // console.log( myNumb ); // 1e+21
            // console.log( myNumb.toLocaleString() );
            // console.log( myNumb.toLocaleString('fullwide', {useGrouping:false}) );
            // amt = amt.toString();
            // console.log( amt); 
            // amt= amt.toString(); 
            // let amt2 = "10000";
            
            // console.log( typeof amt2)

            await usdtInstance
                .approve(spender, amt)
                .then(res => toast.success(amount + ' USDT approval processing, Please wait do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 20000 })

                ).then(res => {
                    setInterval(() => {
                        window.location.reload();
                    }, 20000);
                }).catch(err => toast.error(err + " Unknown Error (first) "));
        } else {
            toast.info('Minimum approval allowed is 20 USDT');
        } 
    }

    async nextAllowance(spender, amount) {
        const { usdtInstance } = await getBlockchain();

        if (amount >= 20) {
            let amt = Number(amount).toFixed();
            amt = amt + "000000000000000000";
            console.log(typeof amt ); 

            await usdtInstance
                .increaseAllowance(spender, amt )
                .then(res => toast.success(amount + ' USDT approval processing, Please wait do not refresh', { position: toast.POSITION.TOP_RIGHT, autoClose: 20000 })) 
                .then(res => {
                    setInterval(() => {
                        window.location.reload();
                    }, 20000);
                })
                .catch(err => toast.error(err + " Unknown Error (next)"));
        } else {
            toast.info('Minimum approval allowed is 20 USDT');
        } 
    } 

    button100(event) {
        this.setState({ count: this.state.count + 100 });
    }

    button500(event) {
        this.setState({ count: this.state.count + 500 });
    }

    button1000(event) {
        this.setState({ count: this.state.count + 1000 });
    }

    button5000(event) {
        this.setState({ count: this.state.count + 5000 });
    }

    button20(event) {
        this.setState({ count: this.state.count + 20 });
    }

    button10(event) {
        this.setState({ count: this.state.count + 10 });
    }

    button50(event) {
        this.setState({ count: this.state.count + 50 });
    }
 

    reset(event) {
        this.setState({ count: 0 });
    }

    render() {

        const colStyle = {
            opacity: "80%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee", backgroundImage: "linear-gradient(to right, #131050, black)"
        };

        const addButton = {
            display: "inline-block",
            padding: "0.5em 1em",
            textDecoration: "none",
            color: "#2DE1EE",
            transition: ".4s", marginTop: "10px", marginLeft: "10px", marginBottom: "10px", fontWeight: "3px", border: "3px solid white", backgroundColor: "black"
        }

        const firstAllowanceButton = {
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
                           Approve USDT</div>
                        <br />
                        <form
                            onSubmit={(event) => {

                                event.preventDefault();

                                const spender = this.state.contractAddress;
                                const amount = this.state.count;
                                const usdApproved = this.props.usdApproved;

                                if (amount >= 20 && usdApproved === 0) {
                                    this.firstAllowance(spender, amount); 
                                } else if (amount >= 20 ) {
                                    this.nextAllowance(spender, amount); 
                                } else {
                                    toast.error("Min deposit is 20 USDT");
                                } 
                            }}

                        >    
                        <label style={{color: "#2DE1EE"}}>Enter Amount </label>
                        <input type="text" style={{ backgroundColor: "black", borderRadius: "2px", height: "50px", color: "#2DE1EE", fontSize: "25px", paddingLeft: "30px", border: "4px solid white", width: "100%" }} value={this.state.count} /> <br /><br />


                        <a href="#10" className="btn btn-primary" style={addButton} onClick={this.button10}>+10</a> 
                        <a href="#20" className="btn btn-primary" style={addButton} onClick={this.button20}>+20</a> 
                        <a href="#50" className="btn btn-primary" style={addButton} onClick={this.button50}>+50</a> 
                        <a href="#100" className="btn btn-primary" style={addButton} onClick={this.button100}>+100</a> 
                        <a href="#500" className="btn btn-primary" style={addButton} onClick={this.button500}>+500</a> 
                        <a href="#1000" className="btn btn-primary" style={addButton} onClick={this.button1000}>+1000</a> 
                        <a href="#5000" className="btn btn-primary" style={addButton} onClick={this.button5000}>+5000</a>  
                        <a href="#reset" className="btn btn-primary" style={addButton} onClick={this.reset}>Reset</a><br />

                        <br />

                        {/* <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "22px" }}>Your token Balance : {this.props.tokenBal} tokens</p> */}
                        <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "14px" }}>Your USDT Balance : {this.props.usdtBal} USDT</p>
                         
                        <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "14px" }}>You will get (BOND ) : {this.state.count/this.props.rtPrice}  </p>
                         
                        <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "14px" }}>Price per token : {this.props.rtPrice} USDT </p>

                        <p style={{ color: "#2DE1EE", textAlign: "center", fontSize: "14px" }}>BOND Balance : {this.props.rtBal} BOND </p>
                         
                        <button type="submit" className="btn btn-success" style={firstAllowanceButton}>Approve USDT</button> 
 
                        </form> 

                    </div>

                    <div className="col-xl-4"></div>
                </div>

            </div>
        )
    }
}

export default ApproveUSD;
