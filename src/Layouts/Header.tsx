import { FC } from 'react' 
import { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../Hooks/customSelector'; 
import { setUser } from '../Redux/Reducers/userReducer';
import { RootState } from '../Redux/store';
 
import { Formik, Field, Form, FormikProps } from 'formik'
import * as yup from 'yup';

const Header: FC<{  }> = (  ) => { 

    const store = useAppSelector((state) => state.store);
    const user = useAppSelector((state: RootState) => state.users.user );
    const dispatch = useAppDispatch();

    let navigate = useNavigate();

    useEffect(() => { 
        let serach_input = window.document.getElementById('630b971a47893');
        
        serach_input?.addEventListener("keypress", (event)=> {
            console.log(event);
            
            if (event.keyCode === 13 || event.key === "Enter") { // key code of the keybord key
                event.preventDefault();
              // navigate( '/products/' + 'SEARCH-'+ event?.target?.value.toUpperCase() + '/' + values.searchStr.toLowerCase() );
            }
        });

        console.log(user);

        }, []);

      
        return (      
            < > 
    <div id="header-outer" data-has-menu="true" data-has-buttons="yes" data-header-button_style="default" data-using-pr-menu="false" data-mobile-fixed="1" data-ptnm="false" data-lhe="animated_underline" data-user-set-bg="#ffffff" data-format="centered-menu-bottom-bar" data-menu-bottom-bar-align="center" data-permanent-transparent="false" data-megamenu-rt="1" data-remove-fixed="1" data-header-resize="0" data-cart="true" data-transparency-option="0" data-box-shadow="large" data-shrink-num="6" data-using-secondary="0" data-using-logo="1" data-logo-height="100" data-m-logo-height="70" data-padding="28" data-full-width="true" data-condense="false">
		
        <div id="search-outer" className="nectar">
          <div id="search">
            <div className="container">
              <div id="search-box">
                <div className="inner-wrap">
                  <div className="col span_12">
                        <form>
                            <input type="text" aria-label="Search" 
                            placeholder="Search"  />
                            <span>Hit enter to search or ESC to close</span>
                            <input type="hidden" name="post_type" value="product" />						
                        </form>
                  </div> 
                </div> 
              </div> 
              <div id="close"><a href="#"><span className="screen-reader-text">Close Search</span>
                <span className="close-wrap"> <span className="close-line close-line1"></span> <span className="close-line close-line2"></span> </span>				 </a></div>
            </div> 
          </div> 
        </div> 
  
  <header id="top">
      <div className="container">
          <div className="row">
              <div className="countries-modal">
                  
  <div className="modal show fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" style={{ paddingRight: "17px", display: "none" }}>
      <div className="modal-dialog" role="document">
          <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Choose your Country</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
              </div>
              <div className="modal-body">
                  <div className="borderfree__dropdown" data-role="dropdownDialog" data-mage-init="{&quot;dropdownDialog&quot;:{
                      &quot;appendTo&quot;:&quot;[data-block=borderfree__dropdown]&quot;,
                      &quot;triggerTarget&quot;:&quot;.borderfree__link&quot;,
                      &quot;timeout&quot;: &quot;500&quot;,
                      &quot;closeOnMouseLeave&quot;: false,
                      &quot;closeOnEscape&quot;: false,
                      &quot;triggerClass&quot;:&quot;active&quot;,
                      &quot;triggerEvent&quot;:&quot;click&quot;,
                      &quot;parentClass&quot;:&quot;active&quot;,
                      &quot;buttons&quot;:[]}}" data-bind="scope: 'borderfree_dropdown'">
                      {/* <script type="text/javascript">
                      var con=new Array();
                      var cur=new Array();
                      con[0]='Afghanistan';cur[0]='AFN';
                      con[1]='Albania';cur[1]='ALL';
                      con[2]='Algeria';cur[2]='DZD';
                      con[3]='Andorra';cur[3]='EUR';
                      con[4]='Angola';cur[4]='AOA';
                      con[5]='Antigua and Barbuda';cur[5]='XCD';
                      con[6]='Argentina';cur[6]='ARS';
                      con[7]='Armenia';cur[7]='AMD';
                      con[8]='Australia';cur[8]='AUD';
                      con[9]='Austria';cur[9]='EUR';
                      con[10]='Azerbaijan';cur[10]='AZN';
                      con[11]='Bahamas';cur[11]='BSD';
                      con[12]='Bahrain';cur[12]='BHD';
                      con[13]='Bangladesh';cur[13]='BDT';
                      con[14]='Barbados';cur[14]='BBD';
                      con[15]='Belarus';cur[15]='BYN';
                      con[16]='Belgium';cur[16]='EUR';
                      con[17]='Belize';cur[17]='BZD';
                      con[18]='Benin';cur[18]='XOF';
                      con[19]='Bhutan';cur[19]='BTN';
                      con[20]='Bolivia';cur[20]='BOB';
                      con[21]='Bosnia and Herzegovina';cur[21]='BAM';
                      con[22]='Botswana';cur[22]='BWP';
                      con[23]='Brazil';cur[23]='BRL';
                      con[24]='Brunei';cur[24]='BND';
                      con[25]='Bulgaria';cur[25]='BGN';
                      con[26]='Burkina Faso';cur[26]='XOF';
                      con[27]='Burundi';cur[27]='BIF';
                      con[28]='Cambodia';cur[28]='KHR';
                      con[29]='Cameroon';cur[29]='XAF';
                      con[30]='Canada';cur[30]='CAD';
                      con[31]='CAYMAN ISLANDS (THE)';cur[31]='KYD';
                      con[32]='Central African Republic';cur[32]='XAF';
                      con[33]='Chad';cur[33]='XAF';
                      con[34]='Chile';cur[34]='CLF';
                      con[35]='China';cur[35]='CNY';
                      con[36]='Colombia';cur[36]='COP';
                      con[37]='Comoros';cur[37]='KMF';
                      con[38]='Congo(DRC)';cur[38]='CDF';
                      con[39]='Congo(ROC)';cur[39]='XAF';
                      con[40]='Costa Rica';cur[40]='CRC';
                      con[41]='Cóte d\'Ivoire';cur[41]='XOF';
                      con[42]='Croatia';cur[42]='HRK';
                      con[43]='Cuba';cur[43]='CUC';
                      con[44]='Cyprus';cur[44]='EUR';
                      con[45]='Czech Republic';cur[45]='CZK';
                      con[46]='Denmark';cur[46]='DKK';
                      con[47]='Djibouti';cur[47]='DJF';
                      con[48]='Dominica';cur[48]='XCD';
                      con[49]='Dominican Republic';cur[49]='DOP';
                      con[50]='East Timor';cur[50]='USD';
                      con[51]='Ecuador';cur[51]='USD';
                      con[52]='Egypt';cur[52]='EGP';
                      con[53]='El Salvador';cur[53]='USD';
                      con[54]='Equatorial Guinea';cur[54]='XAF';
                      con[55]='Eritrea';cur[55]='ERN';
                      con[56]='Estonia';cur[56]='EUR';
                      con[57]='Ethiopia';cur[57]='ETB';
                      con[58]='Fiji';cur[58]='FJD';
                      con[59]='Finland';cur[59]='EUR';
                      con[60]='France';cur[60]='EUR';
                      con[61]='Gabon';cur[61]='XAF';
                      con[62]='Gambia';cur[62]='GMD';
                      con[63]='Georgia';cur[63]='GEL';
                      con[64]='Germany';cur[64]='EUR';
                      con[65]='Ghana';cur[65]='GHS';
                      con[66]='Greece';cur[66]='EUR';
                      con[67]='Grenada';cur[67]='XCD';
                      con[68]='Guatemala';cur[68]='GTQ';
                      con[69]='Guinea';cur[69]='GNF';
                      con[70]='Guinea-Bissau';cur[70]='XOF';
                      con[71]='Guyana';cur[71]='GYD';
                      con[72]='Haiti';cur[72]='HTG';
                      con[73]='Honduras';cur[73]='HNL';
                      con[74]='Hungary';cur[74]='HUF';
                      con[75]='Iceland';cur[75]='ISK';
                      con[76]='India';cur[76]='INR';
                      con[77]='Indonesia';cur[77]='IDR';
                      con[78]='Iran';cur[78]='IRR';
                      con[79]='Iraq';cur[79]='IQD';
                      con[80]='Ireland';cur[80]='EUR';
                      con[81]='Israel';cur[81]='ILS';
                      con[82]='Italy';cur[82]='EUR';
                      con[83]='Jamaica';cur[83]='JMD';
                      con[84]='Japan';cur[84]='JPY';
                      con[85]='Jordan';cur[85]='JOD';
                      con[86]='Kazakhstan';cur[86]='KZT';
                      con[87]='Kenya';cur[87]='KES';
                      con[88]='Kiribati';cur[88]='AUD';
                      con[89]='Korea, North';cur[89]='KPW';
                      con[90]='Korea, South';cur[90]='KRW';
                      con[91]='Kuwait';cur[91]='KWD';
                      con[92]='Kyrgyzstan';cur[92]='KGS';
                      con[93]='Laos';cur[93]='KWD';
                      con[94]='Latvia';cur[94]='EUR';
                      con[95]='Lebanon';cur[95]='LBP';
                      con[96]='Lesotho';cur[96]='LBP';
                      con[97]='Liberia';cur[97]='LRD';
                      con[98]='Libya';cur[98]='LYD';
                      con[99]='Liechtenstein';cur[99]='CHF';
                      con[100]='Lithuania';cur[100]='EUR';
                      con[101]='Luxembourg';cur[101]='EUR';
                      con[102]='Macedonia ';cur[102]='MKD';
                      con[103]='Madagascar';cur[103]='MGA';
                      con[104]='Malawi';cur[104]='MWK';
                      con[105]='Malaysia';cur[105]='MYR';
                      con[106]='Maldives';cur[106]='MVR';
                      con[107]='Mali';cur[107]='XOF';
                      con[108]='Malta';cur[108]='EUR';
                      con[109]='Mauritania';cur[109]='MRU';
                      con[110]='Mauritius';cur[110]='MUR';
                      con[111]='Mexico';cur[111]='MXV';
                      con[112]='Moldova';cur[112]='MDL';
                      con[113]='Monaco';cur[113]='EUR';
                      con[114]='Mongolia';cur[114]='MNT';
                      con[115]='Montenegro';cur[115]='EUR';
                      con[116]='Morocco';cur[116]='MAD';
                      con[117]='Mozambique';cur[117]='MZN';
                      con[118]='Myanmar';cur[118]='MMK';
                      con[119]='Namibia';cur[119]='NAD';
                      con[120]='Nauru';cur[120]='AUD';
                      con[121]='Nepal';cur[121]='NPR';
                      con[122]='Netherlands';cur[122]='EUR';
                      con[123]='New Zealand';cur[123]='NZD';
                      con[124]='Nicaragua';cur[124]='NIO';
                      con[125]='Niger';cur[125]='XOF';
                      con[126]='Nigeria';cur[126]='NGN';
                      con[127]='Norway';cur[127]='NOK';
                      con[128]='Oman';cur[128]='OMR';
                      con[129]='Pakistan';cur[129]='PKR';
                      con[130]='Palau';cur[130]='USD';
                      con[131]='Palestinian State (proposed)';cur[131]='USD';
                      con[132]='Panama';cur[132]='USD';
                      con[133]='Papua New Guinea';cur[133]='PGK';
                      con[134]='Paraguay';cur[134]='PYG';
                      con[135]='Peru';cur[135]='PEN';
                      con[136]='Philippines';cur[136]='PHP';
                      con[137]='Poland';cur[137]='PLN';
                      con[138]='Portugal';cur[138]='EUR';
                      con[139]='Qatar';cur[139]='QAR';
                      con[140]='Romania';cur[140]='RON';
                      con[141]='Russia';cur[141]='RUB';
                      con[142]='Rwanda';cur[142]='RWF';
                      con[143]='St. Kitts and Nevis';cur[143]='XCD';
                      con[144]='St. Lucia';cur[144]='XCD';
                      con[145]='St. Vincent and the Grenadines';cur[145]='XCD';
                      con[146]='Samoa';cur[146]='WST';
                      con[147]='San Marino';cur[147]='EUR';
                      con[148]='Sáo Tomé and Príncipe';cur[148]='STN';
                      con[149]='Saudi Arabia';cur[149]='SAR';
                      con[150]='Senegal';cur[150]='XOF';
                      con[151]='Serbia';cur[151]='RSD';
                      con[152]='Seychelles';cur[152]='SCR';
                      con[153]='Sierra Leone';cur[153]='SLL';
                      con[154]='Singapore';cur[154]='SGD';
                      con[155]='Slovakia';cur[155]='EUR';
                      con[156]='Slovenia';cur[156]='EUR';
                      con[157]='Solomon Islands';cur[157]='SBD';
                      con[158]='Somalia';cur[158]='SOS';
                      con[159]='South Africa';cur[159]='ZAR';
                      con[160]='Spain';cur[160]='EUR';
                      con[161]='Sri Lanka';cur[161]='LKR';
                      con[162]='Sudan';cur[162]='SDG';
                      con[163]='Suriname';cur[163]='SRD';
                      con[164]='Swaziland';cur[164]='SZL';
                      con[165]='Sweden';cur[165]='SEK';
                      con[166]='Switzerland';cur[166]='CHE';
                      con[167]='Syria';cur[167]='SYP';
                      con[168]='Taiwan';cur[168]='TWD';
                      con[169]='Tajikistan';cur[169]='TJS';
                      con[170]='Tanzania';cur[170]='TZS';
                      con[171]='Thailand';cur[171]='THB';
                      con[172]='Togo';cur[172]='XOF';
                      con[173]='Tonga';cur[173]='TOP';
                      con[174]='Trinidad and Tobago';cur[174]='TTD';
                      con[175]='Tunisia';cur[175]='TND';
                      con[176]='Turkey';cur[176]='TND';
                      con[177]='Turkmenistan';cur[177]='TMT';
                      con[178]='Tuvalu';cur[178]='AUD';
                      con[179]='Uganda';cur[179]='UGX';
                      con[180]='Ukraine';cur[180]='UAH';
                      con[181]='United Arab Emirates';cur[181]='AED';
                      con[182]='United Kingdom';cur[182]='GBP';
                      con[183]='United States';cur[183]='USD';
                      con[184]='Uruguay';cur[184]='UYI';
                      con[185]='Uzbekistan';cur[185]='UZS';
                      con[186]='Vanuatu';cur[186]='VUV';
                      con[187]='Vatican City (Holy See)';cur[187]='EUR';
                      con[188]='Venezuela';cur[188]='VEF';
                      con[189]='Vietnam';cur[189]='VND';
                      con[190]='Western Sahara (proposed state)';cur[190]='MAD';
                      con[191]='Yemen';cur[191]='ZMW';
                      con[192]='Zambia';cur[192]='ZWL';
                      con[193]='Zimbabwe';cur[193]='EUR';
                      function list(index)
                      {
                      var con=document.getElementById('curr');
                      if(index==-1){
                      con.value=""; return;}
                      con.value=cur[index];
                      }
                      </script> */}
                      <form action="" id="borderfree-dropdown-form">
                          
                          <label>
                              I'm shipping to: onchange="list(this.value)"
                              <select name="country" id="con" >
                                  {/* <script type="text/javascript">
                                  document.write("<option value=-1>Select Country<\/option>");
                                  count=con.length;
                                  for(i=0;i<count;i++)
                                  document.write("<option value="+i+">"+con[i]+"<\/option>");
                                  </script> */}
                                  <option value="-1">Select Country</option>
                                  <option value="0">Afghanistan</option>
                                  <option value="1">Albania</option>
                                  <option value="2">Algeria</option>
                                  <option value="3">Andorra</option>
                                  <option value="4">Angola</option>
                                  <option value="5">Antigua and Barbuda</option>
                                  <option value="6">Argentina</option>
                                  <option value="7">Armenia</option>
                                  <option value="8">Australia</option>
                                  <option value="9">Austria</option>
                                  <option value="10">Azerbaijan</option>
                                  <option value="11">Bahamas</option>
                                  <option value="12">Bahrain</option>
                                  <option value="13">Bangladesh</option>
                                  <option value="14">Barbados</option>
                                  <option value="15">Belarus</option>
                                  <option value="16">Belgium</option>
                                  <option value="17">Belize</option>
                                  <option value="18">Benin</option>
                                  <option value="19">Bhutan</option>
                                  <option value="20">Bolivia</option>
                                  <option value="21">Bosnia and Herzegovina</option>
                                  <option value="22">Botswana</option>
                                  <option value="23">Brazil</option>
                                  <option value="24">Brunei</option>
                                  <option value="25">Bulgaria</option>
                                  <option value="26">Burkina Faso</option>
                                  <option value="27">Burundi</option>
                                  <option value="28">Cambodia</option>
                                  <option value="29">Cameroon</option>
                                  <option value="30">Canada</option>
                                  <option value="31">CAYMAN ISLANDS (THE)</option>
                                  <option value="32">Central African Republic</option>
                                  <option value="33">Chad</option>
                                  <option value="34">Chile</option>
                                  <option value="35">China</option>
                                  <option value="36">Colombia</option>
                                  <option value="37">Comoros</option>
                                  <option value="38">Congo(DRC)</option>
                                  <option value="39">Congo(ROC)</option>
                                  <option value="40">Costa Rica</option>
                                  <option value="41">Cóte d'Ivoire</option>
                                  <option value="42">Croatia</option>
                                  <option value="43">Cuba</option>
                                  <option value="44">Cyprus</option>
                                  <option value="45">Czech Republic</option>
                                  <option value="46">Denmark</option>
                                  <option value="47">Djibouti</option>
                                  <option value="48">Dominica</option>
                                  <option value="49">Dominican Republic</option>
                                  <option value="50">East Timor</option>
                                  <option value="51">Ecuador</option>
                                  <option value="52">Egypt</option>
                                  <option value="53">El Salvador</option>
                                  <option value="54">Equatorial Guinea</option>
                                  <option value="55">Eritrea</option>
                                  <option value="56">Estonia</option>
                                  <option value="57">Ethiopia</option>
                                  <option value="58">Fiji</option>
                                  <option value="59">Finland</option>
                                  <option value="60">France</option>
                                  <option value="61">Gabon</option>
                                  <option value="62">Gambia</option>
                                  <option value="63">Georgia</option>
                                  <option value="64">Germany</option>
                                  <option value="65">Ghana</option>
                                  <option value="66">Greece</option>
                                  <option value="67">Grenada</option>
                                  <option value="68">Guatemala</option>
                                  <option value="69">Guinea</option>
                                  <option value="70">Guinea-Bissau</option>
                                  <option value="71">Guyana</option>
                                  <option value="72">Haiti</option>
                                  <option value="73">Honduras</option>
                                  <option value="74">Hungary</option>
                                  <option value="75">Iceland</option>
                                  <option value="76">India</option>
                                  <option value="77">Indonesia</option>
                                  <option value="78">Iran</option>
                                  <option value="79">Iraq</option>
                                  <option value="80">Ireland</option>
                                  <option value="81">Israel</option>
                                  <option value="82">Italy</option>
                                  <option value="83">Jamaica</option>
                                  <option value="84">Japan</option>
                                  <option value="85">Jordan</option>
                                  <option value="86">Kazakhstan</option>
                                  <option value="87">Kenya</option>
                                  <option value="88">Kiribati</option>
                                  <option value="89">Korea, North</option>
                                  <option value="90">Korea, South</option>
                                  <option value="91">Kuwait</option>
                                  <option value="92">Kyrgyzstan</option>
                                  <option value="93">Laos</option>
                                  <option value="94">Latvia</option>
                                  <option value="95">Lebanon</option>
                                  <option value="96">Lesotho</option>
                                  <option value="97">Liberia</option>
                                  <option value="98">Libya</option>
                                  <option value="99">Liechtenstein</option>
                                  <option value="100">Lithuania</option>
                                  <option value="101">Luxembourg</option>
                                  <option value="102">Macedonia </option>
                                  <option value="103">Madagascar</option>
                                  <option value="104">Malawi</option>
                                  <option value="105">Malaysia</option>
                                  <option value="106">Maldives</option>
                                  <option value="107">Mali</option>
                                  <option value="108">Malta</option>
                                  <option value="109">Mauritania</option>
                                  <option value="110">Mauritius</option>
                                  <option value="111">Mexico</option>
                                  <option value="112">Moldova</option>
                                  <option value="113">Monaco</option>
                                  <option value="114">Mongolia</option>
                                  <option value="115">Montenegro</option>
                                  <option value="116">Morocco</option>
                                  <option value="117">Mozambique</option>
                                  <option value="118">Myanmar</option>
                                  <option value="119">Namibia</option>
                                  <option value="120">Nauru</option>
                                  <option value="121">Nepal</option>
                                  <option value="122">Netherlands</option>
                                  <option value="123">New Zealand</option>
                                  <option value="124">Nicaragua</option>
                                  <option value="125">Niger</option>
                                  <option value="126">Nigeria</option>
                                  <option value="127">Norway</option>
                                  <option value="128">Oman</option>
                                  <option value="129">Pakistan</option>
                                  <option value="130">Palau</option>
                                  <option value="131">Palestinian State (proposed)</option>
                                  <option value="132">Panama</option>
                                  <option value="133">Papua New Guinea</option>
                                  <option value="134">Paraguay</option>
                                  <option value="135">Peru</option>
                                  <option value="136">Philippines</option>
                                  <option value="137">Poland</option>
                                  <option value="138">Portugal</option>
                                  <option value="139">Qatar</option>
                                  <option value="140">Romania</option>
                                  <option value="141">Russia</option>
                                  <option value="142">Rwanda</option>
                                  <option value="143">St. Kitts and Nevis</option>
                                  <option value="144">St. Lucia</option>
                                  <option value="145">St. Vincent and the Grenadines</option>
                                  <option value="146">Samoa</option>
                                  <option value="147">San Marino</option>
                                  <option value="148">Sáo Tomé and Príncipe</option>
                                  <option value="149">Saudi Arabia</option>
                                  <option value="150">Senegal</option>
                                  <option value="151">Serbia</option>
                                  <option value="152">Seychelles</option>
                                  <option value="153">Sierra Leone</option>
                                  <option value="154">Singapore</option>
                                  <option value="155">Slovakia</option>
                                  <option value="156">Slovenia</option>
                                  <option value="157">Solomon Islands</option>
                                  <option value="158">Somalia</option>
                                  <option value="159">South Africa</option>
                                  <option value="160">Spain</option>
                                  <option value="161">Sri Lanka</option>
                                  <option value="162">Sudan</option>
                                  <option value="163">Suriname</option>
                                  <option value="164">Swaziland</option>
                                  <option value="165">Sweden</option>
                                  <option value="166">Switzerland</option>
                                  <option value="167">Syria</option>
                                  <option value="168">Taiwan</option>
                                  <option value="169">Tajikistan</option>
                                  <option value="170">Tanzania</option>
                                  <option value="171">Thailand</option>
                                  <option value="172">Togo</option>
                                  <option value="173">Tonga</option>
                                  <option value="174">Trinidad and Tobago</option>
                                  <option value="175">Tunisia</option>
                                  <option value="176">Turkey</option>
                                  <option value="177">Turkmenistan</option>
                                  <option value="178">Tuvalu</option>
                                  <option value="179">Uganda</option>
                                  <option value="180">Ukraine</option>
                                  <option value="181">United Arab Emirates</option>
                                  <option value="182">United Kingdom</option>
                                  <option value="183">United States</option>
                                  <option value="184">Uruguay</option>
                                  <option value="185">Uzbekistan</option>
                                  <option value="186">Vanuatu</option>
                                  <option value="187">Vatican City (Holy See)</option>
                                  <option value="188">Venezuela</option>
                                  <option value="189">Vietnam</option>
                                  <option value="190">Western Sahara (proposed state)</option>
                                  <option value="191">Yemen</option>
                                  <option value="192">Zambia</option>
                                  <option value="193">Zimbabwe</option>
                              </select>
                              <input type="text" id="curr" 
                              style={{ borderRadius: 0,
                              border: "1px solid #979797",
                              backgroundColor: "#fff",
                              boxSizing: "border-box",
                              fontSize: "14px",
                              height: "48px",
                              lineHeight: "26px",
                              padding: "10px 18px", 
                              verticalAlign: "baseline",
                              width: "100%" }} size={40} name="currency" readOnly={true} />
                              
                          </label>
                          <input type="submit" className="button button-small button-default" value="Ok" />
                      </form>
                  </div>
              </div>
              
          </div>
      </div>
  </div>			</div>
              <div className="col span_3">
                                  <a id="logo" href="/" data-supplied-ml-starting-dark="false" data-supplied-ml-starting="false" data-supplied-ml="false">
                      <img className="stnd skip-lazy dark-version" width="234" height="112" alt="lapOtencielle"
                       src="/assets/wp-content/uploads/2022/01/images-logo_solo2.png" />				</a>
                                      <nav className="left-side" data-using-pull-menu="true">
                          <div className="header_slider">
                            <section className="vertical-center slider">
                              <div className="slide-heart">
                                  <img src="/assets/wp-content/uploads/2022/02/22.png" /><p>Price match guarantee </p>
                              </div>
                              <div className="slide-bear">
                                  <img src="/assets/wp-content/uploads/2022/02/11-2.png" /><p><b>Delivery Schedule:</b> Delivery may take longer than usual due to covid-19</p>
                              </div>
                            </section>
                          </div>
                          <div className="search_bar">
                          <div className="aws-container" data-url="/?wc-ajax=aws_action" data-siteurl="." data-lang="" data-show-loader="true" data-show-more="true" data-show-page="true" data-ajax-search="true" data-show-clear="true" data-mobile-screen="false" data-use-analytics="false" data-min-chars="1" data-buttons-order="2" data-timeout="300" data-is-mobile="false" data-page-id="5" data-tax="">
                          <Formik
        initialValues={ 
            {
                searchStr: '' 
        }}

        validationSchema={
            yup.object().shape({
                 
                searchStr: yup 
                    .string()
                    .required(`${'You must accept the terms and conditions'}`)
            })
        }
        // innerRef={formRef}
        onSubmit={async (
            values 
          ) => {
                console.log(values);
               if (values.searchStr !== null  && values.searchStr !== '') {
                    navigate( '/products/' + 'SEARCH-'+ values.searchStr.toUpperCase() + '/' + values.searchStr.toLowerCase() );
                    values.searchStr = '';
               }
            }}
        >
            {({ dirty, errors, touched, isValid, handleChange, handleBlur, handleSubmit, values }) => (
                    <Form className="aws-search-form" > 
                        <div className="aws-wrapper">
                        <label className="aws-search-label" htmlFor="630b971a47893">Search</label>
                        <input  type="search"  id="630b971a47893" onChange={handleChange('searchStr')}
                                            onBlur={handleBlur('searchStr')}
                                                value={values.searchStr}  className="aws-search-field" 
                        placeholder="Search" autoComplete="off" />
                        {/* <input type="hidden" value="product"/>
                        <input type="hidden" name="type_aws" value="true" /> */}
                        <div className="aws-search-clear"><span>×</span></div>
                        <div className="aws-loader"></div>
                        </div>
                        <button type='submit' className="aws-form-btn">
                            <span className="aws-search-btn_icon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>
                        </button>
                    </Form>
            )}
        </Formik>
  </div>						</div>	
                                              </nav>
                      <nav className="right-side">
  						{/* <div className="woo_currency_switcher">
                                                      </div>  */}
                          <div className="woocs_currency_switcher">
                              <div className="country_btn">
                                      <div style={{ marginTop:"-7px" }}
                                            className="borderfree bfx_hidden" data-block="borderfree__dropdown">
                                            <a className="show-btn borderfree__link" href="#">
                                                <img src="/assets/wp-content/uploads/2022/02/flags-borderflag.gif" width="18px" height="12px" alt="United States" /><span>$USD</span>
                                            </a>
                                      </div>
                                  </div>
                                                                                                              </div> 
                          <ul id="menu-right_nav" className="sf-menu"><li style={{ position:"relative"}} className="menu-item menu-item-gtranslate">
 
<select   className="notranslate" id="gtranslate_selector" aria-label="Website Language Selector"><option value="">Select Language</option>
    <option value="en|en">English</option>
    <option value="en|fr">French</option>
    <option value="en|de">German</option>
    <option value="en|it">Italian</option>
    <option value="en|ru">Russian</option>
    <option value="en|es">Spanish</option>
</select>

  <div id="google_translate_element2"></div>
  {/* <script>function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'en',autoDisplay: false}, 'google_translate_element2');}if(!window.gt_translate_script){window.gt_translate_script=document.createElement('script');gt_translate_script.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2';document.body.appendChild(gt_translate_script);}</script>
  
  <script>
  function GTranslateGetCurrentLang() {var keyValue = document['cookie'].match('(^|;) ?googtrans=([^;]*)(;|$)');return keyValue ? keyValue[2].split('/')[2] : null;}
  function GTranslateFireEvent(element,event){try{if(document.createEventObject){var evt=document.createEventObject();element.fireEvent('on'+event,evt)}else{var evt=document.createEvent('HTMLEvents');evt.initEvent(event,true,true);element.dispatchEvent(evt)}}catch(e){}}
  function doGTranslate(lang_pair){if(lang_pair.value)lang_pair=lang_pair.value;if(lang_pair=='')return;var lang=lang_pair.split('|')[1];if(GTranslateGetCurrentLang() == null && lang == lang_pair.split('|')[0])return;if(typeof ga=='function'){ga('send', 'event', 'GTranslate', lang, location.hostname+location.pathname+location.search);}var teCombo;var sel=document.getElementsByTagName('select');for(var i=0;i<sel.length;i++)if(sel[i].className.indexOf('goog-te-combo')!=-1){teCombo=sel[i];break;}if(document.getElementById('google_translate_element2')==null||document.getElementById('google_translate_element2').innerHTML.length==0||teCombo.length==0||teCombo.innerHTML.length==0){setTimeout(function(){doGTranslate(lang_pair)},500)}else{teCombo.value=lang;GTranslateFireEvent(teCombo,'change');GTranslateFireEvent(teCombo,'change')}}
  </script> */}
  </li></ul>						<ul className="buttons" data-user-set-ocm="off">
  <li id="search-btn">
  <div><a href="#searchbox"><span className="icon-salient-search" aria-hidden="true"></span><span className="screen-reader-text">search</span></a></div> </li>			 <li id="nectar-user-account" className="">
  <div><Link className="user-account-btn" to="/myaccount">
    {
        user !== null ? 
        <img src="/assets/images/user.png" alt="" /> : 
        <span className="icon-salient-m-user" aria-hidden="true"></span>
    } 
    <span className="screen-reader-text">
                   account </span></Link></div>  </li> <li className="nectar-woo-cart">
              <div className="cart-outer" data-user-set-ocm="off" data-cart-style="dropdown">
                  <div className="cart-menu-wrap">
                      <div className="cart-menu">
                          <a className="cart-contents" href="/cart"><div className="cart-icon-wrap">
  <i className="icon-salient-cart" aria-hidden="true"></i> <div className="cart-wrap"><span>{ store.products.length } </span></div> </div></a>
                      </div>
                  </div>
  
                                      <div className="cart-notification">
                          <span className="item-name"></span> was successfully added to your cart.					</div>
                  
                  <div className="widget woocommerce widget_shopping_cart">
  <h2 className="widgettitle">Cart</h2>
  <div className="widget_shopping_cart_content"></div>
  </div>
              </div>
  
              </li>
  </ul>
                                                                              <div className="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform">
                                  <div> <a href="#sidewidgetarea" aria-label="Navigation Menu" aria-expanded="false" className="closed">
                                      <span className="screen-reader-text">Menu</span><span aria-hidden="true"> <i className="lines-button x2"> <i className="lines"></i> </i> </span> </a> </div>
                              </div>
                                              </nav>
                              </div>
  
              <div className="col span_9 col_last">
                                      <a className="mobile-search" href="#searchbox"><span className="nectar-icon icon-salient-search" aria-hidden="true"></span><span className="screen-reader-text">search</span></a>
                                          <a className="mobile-user-account" href="http://lapotencielle.com/my-account/"><span className="normal icon-salient-m-user" aria-hidden="true"></span><span className="screen-reader-text">account</span></a>
                      
                          <a id="mobile-cart-link" data-cart-style="dropdown" href="./cart/index.html"><i className="icon-salient-cart"></i><div className="cart-wrap"><span>0 </span></div></a>
                                          <a className="show-btn borderfree__link" href="#">
                                              <img src="/assets/wp-content/uploads/2022/02/flags-borderflag.gif" width="18px" height="12px" alt="United States" /><span>$USD</span>
                                          </a>
                                                                              <div className="slide-out-widget-area-toggle mobile-icon slide-out-from-right" data-custom-color="false" data-icon-animation="simple-transform">
                          <div> <a href="#sidewidgetarea" aria-label="Navigation Menu" aria-expanded="false" className="closed">
                              <span className="screen-reader-text">Menu</span><span aria-hidden="true"> <i className="lines-button x2"> <i className="lines"></i> </i> </span>
                          </a>
  </div>
                      </div>
                  
                                      <nav>
        <ul className="sf-menu">
            <li id="menu-item-475" className="columns menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100 sf-with-ul menu-item-475">
            <Link to="/products/OUR COLLECTION/collection"><span className="menu-title-text">
            OUR COLLECTION</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i>
            </span></Link>
        <ul className="sub-menu">
            <li id="menu-item-594" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item hide-title megamenu-column-padding-default menu-item-hidden-text menu-item-594">
            <a href="#"><span className="menu-title-text">OUR COLLECTION</span><span className="sf-sub-indicator">
                <i className="fa fa-angle-right icon-in-menu" aria-hidden="true"></i></span></a>
                <ul className="sub-menu">
                    <li id="menu-item-490" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-490">
                        <Link to="/products/OUR-ORANGE-AND-VANILLA-PRODUCTS/orange">
                            <span className="menu-title-text">OUR ORANGE AND VANILLA PRODUCTS</span></Link></li>
                    <li id="menu-item-485" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-485">
                        <Link to="/products/OUR-LILY-AND-LAVENDER-PRODUCTS/lavender">
                            <span className="menu-title-text">OUR LILY AND LAVENDER PRODUCTS</span></Link></li>
                    <li id="menu-item-484" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-484">
                        <Link to="/products/OUR-AGE-GRACEFULLY-PRODUCTS/age" >
                            <span className="menu-title-text">OUR AGE GRACEFULLY PRODUCTS</span></Link></li>
                    <li id="menu-item-495" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-495">
                        <Link to="/products/IN-PARIS-BODY-CRÉME-SOUFFLÉ-PRODUCTS/paris">
                            <span className="menu-title-text">IN PARIS BODY CRÉME SOUFFLÉ PRODUCTS</span></Link></li>
                    <li id="menu-item-498" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-498">
                        <Link to="/products/OUR-BELLE-COMME-LE-JOUR-PRODUCTS/belle">
                            <span className="menu-title-text">OUR BELLE COMME LE JOUR PRODUCTS</span></Link></li>
                    <li id="menu-item-501" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-501">
                        <Link to="/products/ACCESSORIES-&-TOOLS/accessories">
                        <span className="menu-title-text">ACCESSORIES &#038; TOOLS</span></Link></li>
                </ul>
            </li>
        </ul>
    </li>
  <li id="menu-item-508" className="text_center menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100 sf-with-ul menu-item-508">
<Link to="/products/BATH-AND-BODY/bath" >
    <span className="menu-title-text">BATH AND BODY</span><span className="sf-sub-indicator">
        <i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-505" className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item megamenu-column-width-40 megamenu-column-padding-default menu-item-505">
        <Link to="/kits/OUR-DUO-COLLECTION/duo" ><span className="menu-title-text">
            OUR DUO COLLECTION</span></Link></li>
      <li id="menu-item-591" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-591">
        <Link to="/products/BATH-AND-BODY/bath"><div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-519" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100 sf-with-ul menu-item-519">
  <Link to="/products/HOME-SPA/spa" >
    <span className="menu-title-text">HOME SPA</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-522" className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item megamenu-column-width-40 megamenu-column-padding-default menu-item-522">
      <Link to="/products/BODY-POLISH/polish" ><span className="menu-title-text">BODY POLISH</span></Link></li>
      <li id="menu-item-596" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-596">
        <Link to="/products/BODY-POLISH/polish" >
            <div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-525" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100 sf-with-ul menu-item-525">
  <Link to="/products/GIFTS-AND-SETS/gifts sets" ><span className="menu-title-text">GIFTS &#038; SETS</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-528" className="text_center_txt menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item megamenu-column-width-40 megamenu-column-padding-default menu-item-528">
        <Link to="/kits/OUR-GIFTS-AND-SETS-COLLECTION/gifts" ><span className="menu-title-text">
            OUR GIFTS &#038; SETS COLLECTION</span></Link></li>
      <li id="menu-item-597" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-597">
        <Link to="/products/OUR-GIFTS-AND-SETS-COLLECTION/gifts" >
            <div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-531" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children nectar-regular-menu-item megamenu nectar-megamenu-menu-item align-left width-100 sf-with-ul menu-item-531">
  <Link to="/products/BODY-CARE/body care">
    <span className="menu-title-text">BODY CARE</span><span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span></Link>
  <ul className="sub-menu">
      <li id="menu-item-599" className="text_center_txt menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item hide-title megamenu-column-width-40 megamenu-column-padding-default menu-item-599">
  <a href="#"><span className="menu-title-text">BODY CARE</span><span className="sf-sub-indicator"><i className="fa fa-angle-right icon-in-menu" aria-hidden="true"></i></span></a>
      <ul className="sub-menu">
          <li id="menu-item-534" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-534"><Link to="/products/BODY-LOTION/body lotion" ><span className="menu-title-text">BODY LOTION</span></Link></li>
          <li id="menu-item-551" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-551"><Link to="/products/BODY-CREAM/body cream" ><span className="menu-title-text">BODY CREAM</span></Link></li>
          <li id="menu-item-550" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-550"><Link to="/products/BODY-CREAM-BUTTER/body butter" ><span className="menu-title-text">BODY CREAM BUTTER</span></Link></li>
          <li id="menu-item-549" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-549"><Link to="/products/BODY-OIL/body oil"><span className="menu-title-text">BODY OIL</span></Link></li>
          <li id="menu-item-548" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-548"><Link to="/products/BODY-SCRUB/body scrub"><span className="menu-title-text">BODY SCRUB</span></Link></li>
          <li id="menu-item-547" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-547"><Link to="/products/BODY-BALM/body balm" ><span className="menu-title-text">BODY BALM</span></Link></li>
          <li id="menu-item-554" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-554"><Link to="/products/WHIPPED-BODY-BUTTER/body whipped" ><span className="menu-title-text">WHIPPED BODY BUTTER</span></Link></li>
      </ul>
  </li>
      <li id="menu-item-600" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-600">
        <Link to="/products/BODY-CARE/body care" >
            <div className="nectar-ext-menu-item style-img-above-text">
            <div className="image-layer-outer hover-default">
            <div className="image-layer"></div>
            <div className="color-overlay"></div>
            </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul>
  </li>
  <li id="menu-item-572" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-33">
  <Link to="/products/FACIAL-CARE/facial care" >
    <span className="menu-title-text">FACIAL CARE</span>
  {/* <span className="sf-sub-indicator"><i className="fa fa-angle-down icon-in-menu" aria-hidden="true"></i></span> */}
  </Link>
  {/* <ul className="sub-menu">
      <li id="menu-item-602" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children nectar-regular-menu-item hide-title megamenu-column-width-40 megamenu-column-padding-default menu-item-602">
  <a href="#"><span className="menu-title-text">FACIAL CARE</span><span className="sf-sub-indicator"><i className="fa fa-angle-right icon-in-menu" aria-hidden="true"></i></span></a>
      <ul className="sub-menu">
          <li id="menu-item-843" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-843">
            <Link to="/products/FACIAL-CLEANSER/cleanser" ><span className="menu-title-text">
            FACIAL CLEANSER</span></Link></li>
          <li id="menu-item-568" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-568">
            <Link to="/products/FACIAL-CREAM/facial cream" ><span className="menu-title-text">
                FACIAL CREAM</span></Link></li>
          <li id="menu-item-569" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-569">
            <Link to="/products/FACIAL-MASK/facial mask"><span className="menu-title-text">
                FACIAL MASK</span></Link></li>
          <li id="menu-item-570" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-570">
            <Link to="/products/FACIAL-OIL/facial oil" ><span className="menu-title-text">FACIAL OIL</span></Link></li>
          <li id="menu-item-571" className="text_right_txt text_left menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-571">
          <Link to="/products/FACIAL-TONER/facial toner" ><span className="menu-title-text">FACIAL TONER</span></Link></li>
      </ul>
  </li>
      <li id="menu-item-603" className="border_left menu-item menu-item-type-custom menu-item-object-custom nectar-regular-menu-item megamenu-column-width-60 megamenu-column-padding-default menu-item-603">
      <Link to="/products/FACIAL-CARE/facial care" ><div className="nectar-ext-menu-item style-img-above-text">
  <div className="image-layer-outer hover-default">
  <div className="image-layer"></div>
  <div className="color-overlay"></div>
  </div>
  <div className="inner-content"><span className="title inherit-default"><span className="menu-title-text">DISCOVER NOW</span></span></div>
  </div></Link></li>
  </ul> */}
  </li>
  <li id="menu-item-33" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-33">
  <Link to="/products/HAIR-CARE/hair"><span className="menu-title-text">HAIR CARE</span></Link></li>
  <li id="menu-item-27" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-27">
    <Link to="/about">
        <span className="menu-title-text">ABOUT US</span>
    </Link>
    </li>
  <li id="menu-item-30" className="menu-item menu-item-type-post_type menu-item-object-page nectar-regular-menu-item menu-item-30">
    <a href="#"><span className="menu-title-text">CONTACT</span></a></li>
                              </ul>
                          
                      </nav>
  
                      
                  </div>
  
                  
              </div>
       </div> 
      </header>		
      </div>
  
            </>
        )
}       

export default Header