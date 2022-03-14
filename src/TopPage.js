import React, { Component } from 'react'; 
import ApproveUSD from './ApproveUSD.js';
import ContractInfo from './ContractInfo.js';
import UserInfo from './UserInfo.js';
import getBlockchain from './ethereum.js';
import Invest from './Invest.js';
import TopSponsor from './TopSponsor.js';
import back from "./assets/bg10.jpg" 
import logo from "./assets/logo2.png" 
import ReferralLink from './ReferralLink.js';
import Withdraw from './Withdraw.js';

// const tokenAddress = "0x7CF0cD831f0DF6A3DE92Ce0338475526be5da377"; 
// const usdtAddress = "0x64E0Ff29Fcd9813CAc3dc6ac67a10B98a155C2f8";
const contractAddress = "0x60Cd8C46747A1E94Fd30B65A984435f08D61e5Cc";
// const url = "https://biyondinfinity.farm";

class TopPage extends Component { 

   componentDidMount = async() => {

        await this.loadBlockChainData();

        //    setInterval(() => {
        //         this.timerData(); 
        //     }, 10000); 
   } 

//    timerData = async () => {
//     let { contractInstance } = await getBlockchain();

//     let pool_last_draw = await contractInstance.pool_last_draw();
//     this.setState({ pool_last_draw : Number(pool_last_draw) }); 
//    // console.log(this.state.pool_last_draw)

//     let time_now = await contractInstance.getNow();
//     this.setState({ time_now : Number(time_now) }); 
//     console.log('now '+this.state.time_now)

//     let diff = this.state.time_now - this.state.pool_last_draw; 

//     this.setState({ diff });
//      console.log(this.state.diff);
//     }     

   loadBlockChainData = async () => {

       let { tokenInstance, currentAcc, usdtInstance, contractInstance } = await getBlockchain();
       this.setState({currentAcc});
       
       let symbol  = await tokenInstance.symbol() ;
       this.setState({ symbol });

       let tokenDecimals  = await tokenInstance.decimals() ;
       this.setState({ tokenDecimals : Number(tokenDecimals) });

       let tokenBal  = await tokenInstance.balanceOf(currentAcc) ;
       this.setState({ tokenBal : (Number(tokenBal)/10**(this.state.tokenDecimals)) }); 
       
       let contractRTBal  = await tokenInstance.balanceOf(contractAddress) ;
       this.setState({ contractRTBal : (Number(contractRTBal)/10**(this.state.tokenDecimals)) }); 
       
       // Contract Instance

       let ownerAddress  = await contractInstance.owner() ;
       this.setState({ ownerAddress });
//       console.log('owner ' + ownerAddress); 

        if (this.props.refLinkid) {
            this.setState({ refid: this.props.refLinkid });

        } else {
            this.setState({ refid: this.state.ownerAddress });
        }
      //  console.log('refid- '+this.state.refid);

       let rtPrice = await contractInstance.getRTPrice();
       this.setState({ rtPrice : (Number(rtPrice)/10**(this.state.tokenDecimals)) });   

       let contractInfo = await contractInstance.getContractInfo();
       this.setState({ contract_rt_balance : (Number(contractInfo.contract_rt_balance)/10**(this.state.tokenDecimals)) });
       this.setState({ contract_tusd_balance : (Number(contractInfo.contract_tusd_balance)/10**(this.state.tokenDecimals)) });
       this.setState({ contract_total_users : (Number(contractInfo.contract_total_users)) });
       this.setState({ _total_usd_purchased : (Number(contractInfo._total_usd_purchased)/10**(this.state.tokenDecimals)) });
       this.setState({ _total_rt_sold : (Number(contractInfo._total_rt_sold)/10**(this.state.tokenDecimals)) });
       this.setState({ _total_no_purchases : (Number(contractInfo._total_no_purchases) ) });
       this.setState({ _total_usd_withdrawn : (Number(contractInfo._total_usd_withdrawn)/10**(this.state.tokenDecimals)) });


       let userInfo = await contractInstance.getUserInfo(this.state.currentAcc);
       this.setState({ upline : userInfo.upline });
       this.setState({ tusd_balance : (Number(userInfo.tusd_balance)/10**(this.state.tokenDecimals)) });
       this.setState({ no_of_purchases : (Number(userInfo.no_of_purchases)) });
       this.setState({ direct_biz : (Number(userInfo.direct_biz)/10**(this.state.tokenDecimals)) });
       this.setState({ pool_bonus : (Number(userInfo.pool_bonus)/10**(this.state.tokenDecimals)) }); 
       this.setState({ gen_bonus : (Number(userInfo.gen_bonus)/10**(this.state.tokenDecimals)) }); 
       // USDT Instance
        
       let usdtDecimals  = await usdtInstance.decimals() ;
       this.setState({ usdtDecimals : Number(usdtDecimals) });

       let usdApproved = await usdtInstance.allowance(currentAcc, contractAddress);
       this.setState({ usdApproved : (Number(usdApproved)/10**(this.state.usdtDecimals)) });
//       console.log('usdApproved ' + this.state.usdApproved); 

       let usdtBal  = await usdtInstance.balanceOf(currentAcc) ;
       this.setState({ usdtBal : (Number(usdtBal)/10**(this.state.usdtDecimals)) }); 
 
   }

   constructor(props) {
    super(props)

    this.state = {
         symbol :'',

        } 
    }

   render() { 
    const backStyle = {
        backgroundImage: `url(${back})`, backgroundAttachment: "fixed", fontFamily: "MyFont", height: "auto", width: "100%", margin: "0", backgroundPosition: "center", overflow: "hidden", backgroundRepeat: "no-repeat", backgroundSize: "cover"
    };
    return (
        <div style={backStyle } >
                <div style={{ textAlign: "center" }}>
                                        
                            <img src={logo} alt=""  width="300" />
                         
                </div>

                
                {
                    this.state.usdApproved >= 20 ?
                    
                    <Invest 
                        rtBal = {this.state.tokenBal}
                        usdtBal = {this.state.usdtBal}
                        usdApproved = {this.state.usdApproved}
                        contractRTBal = {this.state.contractRTBal}
                        refid = {this.state.refid}
                    /> :
                    null
                    
                }
                {
                    this.state.usdApproved < 20 ?
                    
                    <ApproveUSD 
                        rtBal = {this.state.tokenBal} 
                        usdtBal = {this.state.usdtBal}
                        usdApproved = {this.state.usdApproved}
                        rtPrice = {this.state.rtPrice}
                    />  :
                    null
                    
                }
                <ContractInfo 
                    contract_rt_balance = {this.state.contract_rt_balance}  
                    contract_tusd_balance = {this.state.contract_tusd_balance }
                    contract_total_users  = {this.state.contract_total_users  }
                    _total_usd_purchased  = {this.state._total_usd_purchased  }
                    _total_rt_sold        = {this.state._total_rt_sold        }
                    _total_no_purchases   = {this.state._total_no_purchases   }
                    _total_usd_withdrawn  = {this.state._total_usd_withdrawn  }
                />           
                <UserInfo 
                    upline =        {this.state.upline}  
                    tusd_balance =  {this.state.tusd_balance }
                    no_of_purchases  = {this.state.no_of_purchases }
                    direct_biz  = {this.state.direct_biz }
                    pool_bonus        = {this.state.pool_bonus }
                    gen_bonus   = {this.state.gen_bonus } 
                />
                <Withdraw
                    avlBalance = {this.state.tusd_balance}
                />
                <ReferralLink
                    currentAcc = {this.state.currentAcc}
                />
                <TopSponsor
                />

                    
                
                <div style={{ paddingBottom: "20px" }}></div>

                <div style={{ paddingBottom: "510px" }}></div> 
            </div>
    )}

}
export default TopPage;