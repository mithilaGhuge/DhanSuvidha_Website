import React, { Component } from "react";
import { Container, Row, Col, Form, Card, CardColumns, Button, FormControl } from 'react-bootstrap';
import "./RegistrationForm.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { formatPhoneNumberIntl } from 'react-phone-number-input'

class RegistrationForm extends Component {
    state = {};
    render() {
        return (
            <Container style={{padding:"20px"}}>
                <Form>
                    <Form.Row Row={3}>
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Control placeholder="Full Name(As Per PAN Card)" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group controlId="formGridCountry" style={{fontSize:"normal"}}>
                            <Form.Control as="select" defaultValue="Contry" style={{ width: "100px" }}>
                                <option value="" hidden>
                                    country
								</option>
                                <option data-countryCode="AF" value="93">
                                    AF (+93)
								</option>
                                <option data-countryCode="AL" value="355">
                                    AL (+355)
								</option>
                                <option data-countryCode="DZ" value="213">
                                    DZ (+213)
								</option>
                                <option data-countryCode="AS" value="1684">
                                    AS(+1684)
								</option>
                                <option data-countryCode="AD" value="376">
                                    AD(+376)
								</option>
                                <option data-countryCode="AO" value="244">
                                    AO(+244)
								</option>
                                <option data-countryCode="AI" value="1264">
                                    AI(+1264)
								</option>
                                <option data-countryCode="AQ" value="672">
                                    AQ(+672)
								</option>
                                <option data-countryCode="AG" value="1268">
                                    AG &amp; Barbuda (+1268)
								</option>
                                <option data-countryCode="AR" value="54">
                                    AR(+54)
								</option>
                                <option data-countryCode="AM" value="374">
                                    AM(+374)
								</option>
                                <option data-countryCode="AW" value="297">
                                    AW(+297)
								</option>
                                <option data-countryCode="AU" value="61">
                                    AU(+61)
								</option>
                                <option data-countryCode="AT" value="43">
                                    AT(+43)
								</option>
                                <option data-countryCode="AZ" value="994">
                                    AZ(+994)
								</option>
                                <option data-countryCode="BS" value="1242">
                                    BS(+1242)
								</option>
                                <option data-countryCode="BH" value="973">
                                    BH(+973)
								</option>
                                <option data-countryCode="BD" value="880">
                                    BD(+880)
								</option>
                                <option data-countryCode="BB" value="1246">
                                    BB(+1246)
								</option>
                                <option data-countryCode="BY" value="375">
                                    BY(+375)
								</option>
                                <option data-countryCode="BE" value="32">
                                    BE(+32)
								</option>
                                <option data-countryCode="BZ" value="501">
                                    BZ(+501)
								</option>
                                <option data-countryCode="BJ" value="229">
                                    BJ(+229)
								</option>
                                <option data-countryCode="BM" value="1441">
                                    BM(+1441)
								</option>
                                <option data-countryCode="BT" value="975">
                                    BT(+975)
								</option>
                                <option data-countryCode="BO" value="591">
                                    BO(+591)
								</option>
                                <option data-countryCode="BA" value="387">
                                    BA &amp; Herzegovina (+387)
								</option>
                                <option data-countryCode="BW" value="267">
                                    BW(+267)
								</option>
                                <option data-countryCode="BR" value="55">
                                    BR(+55)
								</option>
                                <option data-countryCode="IO" value="246">
                                    IO(+246)
								</option>
                                <option data-countryCode="VG" value="1284">
                                    VG(+1284)
								</option>
                                <option data-countryCode="BN" value="673">
                                    BN(+673)
								</option>
                                <option data-countryCode="BG" value="359">
                                    Bulgaria (+359)
								</option>
                                <option data-countryCode="BF" value="226">
                                    BG(+226)
								</option>
                                <option data-countryCode="BI" value="257">
                                    BI(+257)
								</option>
                                <option data-countryCode="KH" value="855">
                                    KH(+855)
								</option>
                                <option data-countryCode="CM" value="237">
                                    CM(+237)
								</option>
                                <option data-countryCode="CA" value="1">
                                    CA(+1)
								</option>
                                <option data-countryCode="CV" value="238">
                                    CV(+238)
								</option>
                                <option data-countryCode="KY" value="1345">
                                    KY(+1345)
								</option>
                                <option data-countryCode="CF" value="236">
                                    CF(+236)
								</option>
                                <option data-countryCode="TD" value="235">
                                    TD(+235)
								</option>
                                <option data-countryCode="CL" value="56">
                                    CL(+56)
								</option>
                                <option data-countryCode="CN" value="86">
                                    CN(+86)
								</option>
                                <option data-countryCode="CX" value="61">
                                    CX(+61)
								</option>
                                <option data-countryCode="CC" value="61">
                                    CC(+61)
								</option>
                                <option data-countryCode="CO" value="57">
                                    CO(+57)
								</option>
                                <option data-countryCode="KM" value="269">
                                    KM(+269)
								</option>
                                <option data-countryCode="CK" value="682">
                                    CK(+682)
								</option>
                                <option data-countryCode="CR" value="506">
                                    CR(+506)
								</option>
                                <option data-countryCode="HR" value="385">
                                    HR(+385)
								</option>
                                <option data-countryCode="CU" value="53">
                                    CU(+53)
								</option>
                                <option data-countryCode="CW" value="599">
                                    CW(+599)
								</option>
                                <option data-countryCode="CY" value="90">
                                    CY(+90)
								</option>
                                <option data-countryCode="CY" value="357">
                                    CY(+357)
								</option>
                                <option data-countryCode="CZ" value="420">
                                    CZ(+420)
								</option>
                                <option data-countryCode="CD" value="243">
                                    CD(+243)
								</option>
                                <option data-countryCode="DK" value="45">
                                    DK(+45)
								</option>
                                <option data-countryCode="DJ" value="253">
                                    DJ(+253)
								</option>
                                <option data-countryCode="DM" value="1809">
                                    DM(+1809)
								</option>
                                <option data-countryCode="DO" value="1809">
                                    DO(+1809)
								</option>
                                <option data-countryCode="TL" value="670">
                                    TL(+670)
								</option>
                                <option data-countryCode="EC" value="593">
                                    EC(+593)
								</option>
                                <option data-countryCode="EG" value="20">
                                    EG(+20)
								</option>
                                <option data-countryCode="SV" value="503">
                                    SV(+503)
								</option>
                                <option data-countryCode="GQ" value="240">
                                    GQ(+240)
								</option>
                                <option data-countryCode="ER" value="291">
                                    ER(+291)
								</option>
                                <option data-countryCode="EE" value="372">
                                    EE(+372)
								</option>
                                <option data-countryCode="ET" value="251">
                                    ET(+251)
								</option>
                                <option data-countryCode="FK" value="500">
                                    FK(+500)
								</option>
                                <option data-countryCode="FO" value="298">
                                    FO(+298)
								</option>
                                <option data-countryCode="FJ" value="679">
                                    FJ(+679)
								</option>
                                <option data-countryCode="FI" value="358">
                                    Finland (+358)
								</option>
                                <option data-countryCode="FR" value="33">
                                    FI(+33)
								</option>
                                <option data-countryCode="GF" value="594">
                                    GF(+594)
								</option>
                                <option data-countryCode="PF" value="689">
                                    PF(+689)
								</option>
                                <option data-countryCode="GA" value="241">
                                    GA(+241)
								</option>
                                <option data-countryCode="GM" value="220">
                                    GM(+220)
								</option>
                                <option data-countryCode="GE" value="7880">
                                    GE(+7880)
								</option>
                                <option data-countryCode="DE" value="49">
                                    DE(+49)
								</option>
                                <option data-countryCode="GH" value="233">
                                    GH(+233)
								</option>
                                <option data-countryCode="GI" value="350">
                                    GI(+350)
								</option>
                                <option data-countryCode="GR" value="30">
                                    GR(+30)
								</option>
                                <option data-countryCode="GL" value="299">
                                    GL(+299)
								</option>
                                <option data-countryCode="GD" value="1473">
                                    GD(+1473)
								</option>
                                <option data-countryCode="GP" value="590">
                                    GP(+590)
								</option>
                                <option data-countryCode="GU" value="671">
                                    GU(+671)
								</option>
                                <option data-countryCode="GT" value="502">
                                    GT(+502)
								</option>
                                <option data-countryCode="GG" value="44">
                                    GG(+44)
								</option>
                                <option data-countryCode="GN" value="224">
                                    GN(+224)
								</option>
                                <option data-countryCode="GW" value="245">
                                    GW(+245)
								</option>
                                <option data-countryCode="GY" value="592">
                                    GY(+592)
								</option>
                                <option data-countryCode="HT" value="509">
                                    HT(+509)
								</option>
                                <option data-countryCode="HN" value="504">
                                    HN(+504)
								</option>
                                <option data-countryCode="HK" value="852">
                                    Hong Kong (+852)
								</option>
                                <option data-countryCode="HU" value="36">
                                    HK(+36)
								</option>
                                <option data-countryCode="IS" value="354">
                                    IS(+354)
								</option>
                                <option data-countryCode="IN" value="91">
                                    IN(+91)
								</option>
                                <option data-countryCode="ID" value="62">
                                    ID(+62)
								</option>
                                <option data-countryCode="IR" value="98">
                                    IR(+98)
								</option>
                                <option data-countryCode="IQ" value="964">
                                    IQ(+964)
								</option>
                                <option data-countryCode="IE" value="353">
                                    IE(+353)
								</option>
                                <option data-countryCode="IM" value="44">
                                    IM(+44)
								</option>
                                <option data-countryCode="IL" value="972">
                                    IL(+972)
								</option>
                                <option data-countryCode="IT" value="39">
                                    IT(+39)
								</option>
                                <option data-countryCode="CI" value="225">
                                    CI(+225)
								</option>
                                <option data-countryCode="JM" value="1876">
                                    JM(+1876)
								</option>
                                <option data-countryCode="JP" value="81">
                                    JP(+81)
								</option>
                                <option data-countryCode="JE" value="44">
                                    JE(+44)
								</option>
                                <option data-countryCode="JO" value="962">
                                    JO(+962)
								</option>
                                <option data-countryCode="KZ" value="7">
                                    KZ(+7)
								</option>
                                <option data-countryCode="KE" value="254">
                                    KE(+254)
								</option>
                                <option data-countryCode="KI" value="686">
                                    KI(+686)
								</option>
                                <option data-countryCode="XK" value="383">
                                    XK(+383)
								</option>
                                <option data-countryCode="KW" value="965">
                                    KW(+965)
								</option>
                                <option data-countryCode="KG" value="996">
                                    KG(+996)
								</option>
                                <option data-countryCode="LA" value="856">
                                    LA(+856)
								</option>
                                <option data-countryCode="LV" value="371">
                                    LV(+371)
								</option>
                                <option data-countryCode="LB" value="961">
                                    LB(+961)
								</option>
                                <option data-countryCode="LS" value="266">
                                    LS(+266)
								</option>
                                <option data-countryCode="LR" value="231">
                                    LR(+231)
								</option>
                                <option data-countryCode="LY" value="218">
                                    LY(+218)
								</option>
                                <option data-countryCode="LI" value="417">
                                    LI(+417)
								</option>
                                <option data-countryCode="LT" value="370">
                                    LT(+370)
								</option>
                                <option data-countryCode="LU" value="352">
                                    LU(+352)
								</option>
                                <option data-countryCode="MO" value="853">
                                    MO(+853)
								</option>
                                <option data-countryCode="MK" value="389">
                                    MK(+389)
								</option>
                                <option data-countryCode="MG" value="261">
                                    MG(+261)
								</option>
                                <option data-countryCode="MW" value="265">
                                    MW(+265)
								</option>
                                <option data-countryCode="MY" value="60">
                                    MY(+60)
								</option>
                                <option data-countryCode="MV" value="960">
                                    MV(+960)
								</option>
                                <option data-countryCode="ML" value="223">
                                    ML(+223)
								</option>
                                <option data-countryCode="MT" value="356">
                                    MT(+356)
								</option>
                                <option data-countryCode="MH" value="692">
                                    MH(+692)
								</option>
                                <option data-countryCode="MQ" value="596">
                                    MQ(+596)
								</option>
                                <option data-countryCode="MR" value="222">
                                    MR(+222)
								</option>
                                <option data-countryCode="YT" value="269">
                                    YT(+269)
								</option>
                                <option data-countryCode="MX" value="52">
                                    MX(+52)
								</option>
                                <option data-countryCode="FM" value="691">
                                    FM(+691)
								</option>
                                <option data-countryCode="MD" value="373">
                                    MD(+373)
								</option>
                                <option data-countryCode="MC" value="377">
                                    MC(+377)
								</option>
                                <option data-countryCode="MN" value="976">
                                    MN(+976)
								</option>
                                <option data-countryCode="ME" value="382">
                                    ME(+382)
								</option>
                                <option data-countryCode="MS" value="1664">
                                    MS(+1664)
								</option>
                                <option data-countryCode="MA" value="212">
                                    MA(+212)
								</option>
                                <option data-countryCode="MZ" value="258">
                                    MZ(+258)
								</option>
                                <option data-countryCode="MN" value="95">
                                    MN(+95)
								</option>
                                <option data-countryCode="NA" value="264">
                                    NA(+264)
								</option>
                                <option data-countryCode="NR" value="674">
                                    NR(+674)
								</option>
                                <option data-countryCode="NP" value="977">
                                    NP(+977)
								</option>
                                <option data-countryCode="NL" value="31">
                                    NL(+31)
								</option>
                                <option data-countryCode="AN" value="599">
                                    AN(+599)
								</option>
                                <option data-countryCode="NC" value="687">
                                    NC(+687)
								</option>
                                <option data-countryCode="NZ" value="64">
                                    NZ(+64)
								</option>
                                <option data-countryCode="NI" value="505">
                                    NI(+505)
								</option>
                                <option data-countryCode="NE" value="227">
                                    NE(+227)
								</option>
                                <option data-countryCode="NG" value="234">
                                    NG(+234)
								</option>
                                <option data-countryCode="NU" value="683">
                                    NU(+683)
								</option>
                                <option data-countryCode="KP" value="850">
                                    KP(+850)
								</option>
                                <option data-countryCode="NF" value="672">
                                    NF(+672)
								</option>
                                <option data-countryCode="NP" value="670">
                                    NP(+670)
								</option>
                                <option data-countryCode="NO" value="47">
                                    NO(+47)
								</option>
                                <option data-countryCode="OM" value="968">
                                    OM(+968)
								</option>
                                <option data-countryCode="PK" value="92">
                                    PK(+92)
								</option>
                                <option data-countryCode="PW" value="680">
                                    PW(+680)
								</option>
                                <option data-countryCode="PS" value="970">
                                    PS(+970)
								</option>
                                <option data-countryCode="PA" value="507">
                                    PA(+507)
								</option>
                                <option data-countryCode="PG" value="675">
                                    PG(+675)
								</option>
                                <option data-countryCode="PY" value="595">
                                    PY(+595)
								</option>
                                <option data-countryCode="PE" value="51">
                                    PE(+51)
								</option>
                                <option data-countryCode="PH" value="63">
                                    PH(+63)
								</option>
                                <option data-countryCode="PN" value="64">
                                    PN(+64)
								</option>
                                <option data-countryCode="PL" value="48">
                                    PL(+48)
								</option>
                                <option data-countryCode="PT" value="351">
                                    PT(+351)
								</option>
                                <option data-countryCode="PR" value="1787">
                                    PR(+1787)
								</option>
                                <option data-countryCode="QA" value="974">
                                    QA(+974)
								</option>
                                <option data-countryCode="CG" value="242">
                                    CG(+242)
								</option>
                                <option data-countryCode="RE" value="262">
                                    RE(+262)
								</option>
                                <option data-countryCode="RO" value="40">
                                    RO(+40)
								</option>
                                <option data-countryCode="RU" value="7">
                                    RU(+7)
								</option>
                                <option data-countryCode="RW" value="250">
                                    RW(+250)
								</option>
                                <option data-countryCode="BL" value="590">
                                    BL(+590)
								</option>
                                <option data-countryCode="SH" value="290">
                                    SH(+290)
								</option>
                                <option data-countryCode="KN" value="1869">
                                    KN &amp; Nevis (+1869)
								</option>
                                <option data-countryCode="SC" value="1758">
                                    SC(+1758)
								</option>
                                <option data-countryCode="SR" value="597">
                                    SR(+597)
								</option>
                                <option data-countryCode="MF" value="590">
                                    MF(+590)
								</option>
                                <option data-countryCode="PM" value="508">
                                    PM(+508)
								</option>
                                <option data-countryCode="VC" value="1784">
                                    VC(+1784)
								</option>
                                <option data-countryCode="WS" value="685">
                                    WS(+685)
								</option>
                                <option data-countryCode="SM" value="378">
                                    SM(+378)
								</option>
                                <option data-countryCode="ST" value="239">
                                    ST &amp; Principe (+239)
								</option>
                                <option data-countryCode="SA" value="966">
                                    SA(+966)
								</option>
                                <option data-countryCode="SN" value="221">
                                    SN(+221)
								</option>
                                <option data-countryCode="CS" value="381">
                                    CS(+381)
								</option>
                                <option data-countryCode="SC" value="248">
                                    SC(+248)
								</option>
                                <option data-countryCode="SL" value="232">
                                    SL(+232)
								</option>
                                <option data-countryCode="SG" value="65">
                                    SG(+65)
								</option>
                                <option data-countryCode="SX" value="1721">
                                    SX(+1721)
								</option>
                                <option data-countryCode="SK" value="421">
                                    SK(+421)
								</option>
                                <option data-countryCode="SI" value="386">
                                    SI(+386)
								</option>
                                <option data-countryCode="SB" value="677">
                                    SB(+677)
								</option>
                                <option data-countryCode="SO" value="252">
                                    SO(+252)
								</option>
                                <option data-countryCode="ZA" value="27">
                                    ZA(+27)
								</option>
                                <option data-countryCode="KR" value="82">
                                    KR(+82)
								</option>
                                <option data-countryCode="SS" value="211">
                                    SS(+211)
								</option>
                                <option data-countryCode="ES" value="34">
                                    ES(+34)
								</option>
                                <option data-countryCode="ES" value="94">
                                    ES(+94)
								</option>
                                <option data-countryCode="SD" value="249">
                                    SD(+249)
								</option>
                                <option data-countryCode="SR" value="597">
                                    SR(+597)
								</option>
                                <option data-countryCode="SJ" value="47">
                                    SJ &amp; Jan Mayen (+47)
								</option>
                                <option data-countryCode="SZ" value="268">
                                    SZ(+268)
								</option>
                                <option data-countryCode="SE" value="46">
                                    SE(+46)
								</option>
                                <option data-countryCode="CH" value="41">
                                    CH(+41)
								</option>
                                <option data-countryCode="SY" value="963">
                                    SY(+963)
								</option>
                                <option data-countryCode="TW" value="886">
                                    TW(+886)
								</option>
                                <option data-countryCode="TJ" value="992">
                                    TJ(+992)
								</option>
                                <option data-countryCode="TZ" value="255">
                                    TZ(+255)
								</option>
                                <option data-countryCode="TH" value="66">
                                    TH(+66)
								</option>
                                <option data-countryCode="TG" value="228">
                                    TG(+228)
								</option>
                                <option data-countryCode="TO" value="676">
                                    TO(+676)
								</option>
                                <option data-countryCode="TT" value="1868">
                                    TT &amp; Tobago (+1868)
								</option>
                                <option data-countryCode="TN" value="216">
                                    TN(+216)
								</option>
                                <option data-countryCode="TR" value="90">
                                    TR(+90)
								</option>
                                <option data-countryCode="TM" value="993">
                                    TM(+993)
								</option>
                                <option data-countryCode="TC" value="1649">
                                    TC &amp; Caicos Islands (+1649)
								</option>
                                <option data-countryCode="TV" value="688">
                                    TV(+688)
								</option>
                                <option data-countryCode="UG" value="256">
                                    UG(+256)
								</option>
                                <option data-countryCode="UA" value="380">
                                    UA(+380)
								</option>
                                <option data-countryCode="AE" value="971">
                                    AE(+971)
								</option>
                                <option data-countryCode="GB" value="44">
                                    GB(+44)
								</option>
                                <option data-countryCode="US" value="1">
                                    US(+1)
								</option>
                                <option data-countryCode="UY" value="598">
                                    UY(+598)
								</option>
                                <option data-countryCode="UZ" value="998">
                                    UZ(+998)
								</option>
                                <option data-countryCode="VU" value="678">
                                    VU(+678)
								</option>
                                <option data-countryCode="VA" value="379">
                                    VA(+379)
								</option>
                                <option data-countryCode="VE" value="58">
                                    VE(+58)
								</option>
                                <option data-countryCode="VN" value="84">
                                    VN(+84)
								</option>
                                <option data-countryCode="WF" value="681">
                                    WF &amp; Futuna (+681)
								</option>
                                <option data-countryCode="YE" value="969">
                                    YE(North)(+969)
								</option>
                                <option data-countryCode="YE" value="967">
                                    YE(South)(+967)
								</option>
                                <option data-countryCode="ZM" value="260">
                                    ZM(+260)
								</option>
                                <option data-countryCode="ZW" value="263">
                                    ZW(+263)
								</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridMobile">
                            <Form.Control type="tel" pattern="^\d{4}-\d{3}-\d{4}$" required placeholder="Mobile Number"></Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridEmail">
                        <Form.Control type="email" placeholder="example@email.com" />
                    </Form.Group>
                    <Form.Group controlId="formGridPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGridPasswordRetype">
                        <Form.Control type="password" placeholder="Retype yout password" />
                    </Form.Group>

                    <Form.Row className="form-check-inline" >
                    <Form.Group id="formGridCheckasUser">
                        <Form.Check classtype="radio" label="User" />
                    </Form.Group>
                    
                    <Form.Group id="formGridCheckasPartner">
                        <Form.Check type="radio" label="Partner" />
                    </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as ={Row} id="formGridTermCheckbox" style={{padding:"15px"}}>
                            <Form.Check type="checkbox" 
                                label="We accept the term and condition and privacy policy."
                                />
                        </Form.Group>
                    </Form.Row>
                    <Button className="btn btn-block" variant="success" type="submit">
                        Sign Up
                </Button>
                </Form>
            </Container>
        );
    }
}

export default RegistrationForm;