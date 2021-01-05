import React, { useEffect } from "react";
import { Layout, Row, Col } from "antd";
import { connect, useDispatch } from "react-redux";
import Nav from "../Layout/nav";
import { getOnlineUserProfile } from "../redux/actions/userActionCreator";
import "../Styling/aboutus.css";
import "../Styling/refund.css";
import Foter from "../Layout/Footer";
const { Content } = Layout;
function Refund(props) {
  const { auth } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOnlineUserProfile());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        <Nav auth={auth} />
        <Layout>
          <Content>
            <Row className="about-container">
              <Col span={11}>
                <fieldset class="scheduler-border">
                  <legend class="scheduler-border about-heading">
                    Terms &amp; Conditions
                  </legend>
                  <div class="control-group">
                    <Row>
                      <Col span={11}>
                        <p className="terms-gragh">
                          Applications technology (APPTECH) is a software
                          company registered under the commercial rules of the
                          (https://gafi.gov.eg/english/Pages/default.aspx) for
                          producing , operating and marketing all software
                          Applications . Apptech has the authority to produce ,
                          operate and selling applications . This is an
                          agreement between Applications Technologies (Apptech)
                          , and you (if registering as an individual) or the
                          entity you represent (if registering as a business)
                          ("Developer" or "you"). Any other Apptech affiliate
                          that we designate, including in any schedule to this
                          agreement, is also an Apptech Party. 1. Definitions .
                          1-1 Our Applications(the "Applications") is any
                          software or application produced by Apptech or any
                          other client allows end users to purchase, download,
                          and access software applications, games, and other
                          digital products and services (for instance, the
                          Apptech service (the "Service")) and allows developers
                          to enable access to Apptech products and services in
                          their Apps and Devices. 1-2"Apps" are software
                          applications, games, and other digital products that
                          Apptech or any client submit to us for developing ,
                          upgrade , sale, distribution, or promotion through the
                          Applications, or with which you use any Applications
                          Materials, together with their enhancements, upgrades,
                          updates, bug fixes, new versions and other
                          modifications and amendments. 1-3 "Devices" are
                          devices and device components that use any
                          Applications Materials. 1-4"Content" means the Code,
                          Apps, content, ads, services, technology, data and
                          other digital materials included in or made available
                          through your Apps or Devices, and all Product
                          Information (defined in Section 7). You and your
                          Content and Devices must comply with any additional
                          requirements and policies 1-5(“Applications Policies”)
                          linked from any Schedule that applies to you or
                          otherwise included in the documentation applicable to
                          your activities in connection with the Applications.
                          1-6 (ACB) is the application name of (Apptech Chalihe
                          Book) 2. Applications Materials. We may make available
                          certain software, software development kits,
                          libraries, application interfaces, services,
                          documentation, sample code, and related materials and
                          information for use in connection with the
                          Applications(collectively, the "Applications
                          Materials"). If you use any Applications Materials,
                          you are subject to and agree to comply with our
                          License Agreement (the "Applications Materials
                          License"), use of certain Applications Materials is
                          also subject to the additional terms in any Schedules
                          that apply to those Applications Materials (for
                          instance, your use of the Applications Materials that
                          we make available for sale of In-App Products is
                          subject to the terms of the Distribution Schedule and
                          the In-App Products Schedule). You are solely
                          responsible for ensuring your Content and Devices
                          function properly with any Applications Materials you
                          use, including any future updated or modified versions
                          of those Applications Materials. To the extent there
                          is any conflict between this Agreement and the
                          Applications Materials License, the Applications
                          Materials License will govern with respect to your use
                          of the Applications Materials. 3. Applications
                          operations (Chalihe-Book). ( Www.chalihebook.com )
                          Apptech has the right to operate any applications
                          (chalihebook.com) between users for managing users or
                          client’s properties as a broker by renting or
                          exchanging the properties of the clients. the owners
                          of the properties agreed to rent or sale or exchange
                          it throw Apptech platforms under the legal renting
                          agreements in each country. Apptech has the right to
                          use and share user’s information with the other users
                          to complete the process . the users agree to finalize
                          the deals between the users as the agreed to advertise
                          and upload their properties for the application 4.
                          Member Terms and Conditions Introduction 5.1 These
                          terms of membership (“Terms”) set out the contract
                          between The Applications technology company as
                          (APPTECH) whose registered office is at Cairo _ Egypt
                          - (“APPTECH”, “ACB”, “we”, “us” or “our”) and any
                          individual who is accepted by us for ACB (APPTECH
                          CALIHEBOOK) membership (“Member” or “you”). 5.2 These
                          Terms apply to all services offered by Apptech to
                          Members, and their guests (if applicable), together
                          with any other applicable terms and conditions
                          notified to you by ACB from time to time. 5.3 These
                          Terms shall be governed by and construed in accordance
                          with the laws of any country the application applied
                          in irrespective of the nationality of the Member. 5.4
                          Other services offered by third parties with the
                          permission of ACB are subject to separate terms and
                          conditions which will be notified to you at the time
                          such offers are made. Your relationship with ACB 5.5
                          By becoming a Member you are appointing ACB as your
                          agent to: 5.5.1 Introduce you to other Members who
                          have listed their Home (as defined in term 2.2) which
                          you may like to accept as an Exchange (as defined in
                          term 5.1). For the purposes of these Terms, when you
                          stay in another Member’s Home you are a “Guest”; 5.5.2
                          Introduce you to other Members who would like to stay
                          in the Home that you have listed. For the purposes of
                          these Terms, when another Member stays in your Home
                          you are a “Host”; 5.5.3 Allow Members to participate
                          in the ACB Points Scheme (“Scheme”). 5.5.4 Allow
                          Members to use the Instant System (as defined in term
                          7.1). 5.5.5 You acknowledge that ACB does not own,
                          control or in any way manage any property listed on
                          the ACB platform (“Home”) and that ACB makes no
                          promise or representation whatsoever in relation to
                          any Home including, but not limited to, the level of
                          cleanliness of a Home. You must make your own
                          enquiries and satisfy yourself on such matters. 5.6 We
                          make no promise or statement that your ACB membership
                          will produce any particular outcome - for example,
                          Exchanges into specific Homes or locations. 5.7
                          Membership .By applying for ACB membership you confirm
                          that: 5.7.1 you are at least 18 years of age (or older
                          if required by applicable local laws); 5.7.2 ACB sign
                          up process, in the form required by ACB from time to
                          time, has or will be completed and submitted to ACB,
                          either by you or on your behalf (“APPTECH”); 5.7.3
                          you:are the owner, or co-owner, of the applicable Home
                          you wish to list on the ACB Platform (“Platform”); or
                          have the approval of the owner or co-owners of the
                          applicable Home you wish to list on the Platform;
                          5.7.4 f you agree an Exchange, Points booking or
                          Instant booking with another Member, such booking
                          shall be in respect of the Home listed on the
                          Platform. 5.7.5 you shall pay all applicable fees to
                          ACB at the time and in the manner specified by ACB.
                          5.7.6 We reserve the right to refuse any application
                          for membership at our discretion including, without
                          limitation, where we are required to do so by the
                          laws, rules or regulations of any local, state,
                          national or federal governmental entity or by
                          judicial, public, regulatory or law enforcement
                          authority or court. 5.7.7 Without prejudice to any
                          other rights or remedies ACB may have, ACB reserves
                          the right at its sole discretion to carry out
                          background checks and/or refuse, cancel or terminate a
                          membership, membership application or membership
                          renewal if ACB becomes aware that a Member, or
                          prospective member: has or may have a criminal
                          conviction that, in ACB’ reasonable opinion, may
                          impact the Member’s ability to act as a Host and/or a
                          Guest; or has or may have previously behaved in a way
                          that has called into question their ability to meet
                          ACB’ expectations of its Hosts and/or Guests (as
                          outlined in these Terms and the Member Exclusion
                          Policy). 5.7.8 ACB shall use its reasonable endeavours
                          to investigate any information and/or allegations it
                          receives in relation to term 3.3 and shall only
                          terminate a membership if it is satisfied (acting
                          reasonably) that there is substance to such
                          information and/or allegation. 5.8 If accepted, your
                          membership shall start on the day on which (a) ACB has
                          received, processed and accepted your Application; and
                          (b) ACB has received the applicable membership fee.
                          ACB may terminate/refuse membership if we do not
                          receive the applicable fee. 5.9 Membership is personal
                          to you and cannot be transferred or sold. 5.10 Up to 2
                          co-owners or residents of a Home who live at the same
                          address may apply for one membership. You must
                          nominate a lead Member to act as principal point of
                          contact in relation to your membership. 5.11ACB shall
                          be permitted to take instructions from, and disclose
                          information about the membership, to either co-owner
                          or resident. 5.12 If we are given conflicting
                          instruction from co-owners or residents, we are
                          entitled to take the first set of instructions
                          received and act on those instructions. If we continue
                          to receive conflicting instructions from co-owners or
                          residents, we may, at our reasonable discretion: 5.13
                          suspend or cancel (with an appropriate refund, if
                          applicable and at ACB’ sole discretion): 5.13.1
                          Exchange privileges relating to your Home; 5.13.2
                          Confirmed Exchange bookings; 5.13.3 Confirmed Points
                          redemptions; and/or 5.13.4 Confirmed Instant bookings;
                          or 5.13.5 Terminate your membership. Should ACB
                          terminate your membership pursuant to this term, it
                          shall be under no obligation to refund the membership
                          fee paid (either in whole or in part) and any such
                          refund issued shall be entirely at ACB’ discretion,
                          5.13.6 Unless such instructions can be promptly
                          reconciled or resolved. 5.14 Listings 5.14.1 In order
                          to be able to list your Home on the Platform you must
                          be a current ACB Member; and have paid all applicable
                          fees (including but not limited to membership fees).
                          5.14.2 When you list your Home with us, you agree,
                          represent and warrant that you have the full legal
                          right to use, and permit others to use, your Home in
                          accordance with the ACB service that you will
                          accurately describe your Home on the Platform and will
                          upload a minimum of 12 images which accurately depict
                          the rooms and/or spaces within your Home. You confirm
                          that 5.14.3 you have the necessary rights, licences,
                          permissions and/or consents to use any intellectual
                          property rights contained within any image and/or
                          description of your Home; and the images and
                          information used accurately reflect the Home (such as
                          the number and size of rooms etc.) that you are not
                          using the Platform for any commercial purposes
                          including rental, sale or onward exchange to a third
                          party that your Home is in good, safe and useable
                          condition; and that you have any necessary licences,
                          permissions, consents and insurances to lawfully allow
                          your Home to be used in accordance with the ACB
                          service. 5.14.4 By listing your Home with us, you
                          hereby grant ACB a non-exclusive, royalty free,
                          worldwide, irrevocable licence to use the image(s)
                          and/or description of your Home in any advertising,
                          marketing and/or promotional material relating to the
                          Platform. 5.14.5 We reserve the right to refuse and/or
                          remove any listing at our discretion. We may do this
                          if we think the Home is unsuitable or if we reasonably
                          believe the listing to be inaccurate. 5.15 We
                          recommend that you add your Home as a listing as early
                          as possible once your Home’s availability is known to
                          you to increase your chances of finding a successful
                          swap. 5.16 You may withdraw the listing at any time
                          unless the listing has 5.16.1 already been assigned to
                          another Member; 5.16.2 you have received a confirmed
                          Exchange in respect of that listing; or 5.16.3 any
                          part of that listing is shown as an Instant booking
                          listing (in which case term 7.9 shall apply). 5.17
                          Where we are able to, we try to ensure that listings
                          are accurate and complete however we cannot guarantee
                          this and accept no responsibility for inaccurate
                          listings and/or your reliance on them. 5.18 Exchanges
                          Before you can swap your Home with another Member (an
                          “Exchange”), you must: 5.18.1 have listed your Home on
                          the Platform 5.18.2 have paid the necessary Exchange
                          fee, as detailed on the ACB website (if applicable);
                          and 5.18.3 for Scheme Members, have the necessary
                          number of Points to be able to enter into the
                          Exchange. 5.19 f you agree to enter into an Exchange
                          with another Member the terms of the arrangement
                          and/or agreement regarding the Exchange are solely
                          between you and the other Member. ACB is not a party
                          to such agreements. 5.20 You therefore acknowledge and
                          agree that, save as set out in these Terms, ACB does
                          not have any responsibility or liability for any such
                          arrangement, agreement, relationship or other dealing
                          between you and another Member. 5.21 Points Scheme To
                          be able to participate in the Scheme you must be a
                          fully paid-up Member: 5.21.1 at the time you list your
                          Home; and 5.21.2 at the time you stay in another
                          Scheme Member’s Home. 5.21.3 Being a Scheme Member
                          allows you to use Scheme points (“Points”) to book an
                          exchange into another Scheme Member’s Home (“Points
                          Redemption”) upon the payment of the applicable
                          Exchange fee, as detailed on the ACB website. 5.21.4
                          Points can be earnt by listing your Home through the
                          Scheme and/or as an Instant booking listing; and/or
                          borrowed upon payment of the applicable fee, as listed
                          on the ACB website. Please note that you can only
                          borrow Points up to a maximum of 5 times during your
                          membership, and you may only borrow a maximum of
                          10,000 Points each time. 5.21.5 Points Redemptions are
                          subject to availability and are offered on a
                          first-come, first-served basis (except as otherwise
                          indicated in these Terms) conditional upon the Scheme
                          Member having a sufficient number of Points for the
                          Points Redemption requested; and conditional upon the
                          Scheme Member paying the applicable fee (“Redemption
                          Fee”), as detailed on ACB’ website. 5.22 Confirmation
                          of a Points Redemption will only be valid when issued
                          to you in writing by, or email from, ACB and the
                          ‘discussion status’ is shown as agreed. You should
                          check the details of your confirmation carefully when
                          you receive it and let us know as soon as possible if
                          anything is incorrect. 5.23 If you cancel a Points
                          Redemption which has already been accepted by the Host
                          you shall lose your Redemption Fee and shall not be
                          entitled to a refund, whether in whole or in part, and
                          the number of Points returned to you will be
                          determined in accordance with the cancellation policy
                          outlined within these terms. 5.24 If a Host cancels a
                          Points Redemption which has already been accepted and
                          confirmed by them, we will use our reasonable
                          endeavours to find you an alternative Home of
                          equivalent size and location to stay in. If we are
                          unable to find you an alternative Points Redemption or
                          you do not agree to any alternative Points Redemption
                          found by us (acting reasonably), we will credit your
                          Points account with the appropriate number of Points.
                          5.25 Instant Booking The instant booking system
                          (“Instant System”) allows participating Members to
                          earn and spend Points instantly. 5.25.1 The Instant
                          System is only available to Members who: 5.25.2 have
                          opted into the Scheme; and 5.25.3 have completed the
                          ACB on-boarding programme (“On-boarding Programme”).
                          5.25.4 Hosts can list their Homes for Instant booking
                          via the Instant calendar. For the avoidance of doubt,
                          the terms and conditions contained elsewhere in these
                          Terms in relation to listings also apply to Instant
                          booking listings. 5.25.5 A Host’s Instant booking
                          listing will only be accepted if:. 5.25.6 The listing
                          is for a duration of between 3 and 14 nights
                          (inclusive); 5.25.7 The start date for the listing is
                          at least 2 months from the date the listing is posted;
                          5.25.8 The start date for the listing is no more than
                          18 months from the date the listing is posted; and
                          5.25.9 The membership period, please contact our
                          Customer Services team to discuss extending your
                          membership. 5.25.10 Hosts may only use the Instant
                          System to add up to a maximum of 30 nights at any one
                          time. This limit applies per account and to all
                          properties listed on that account. Once a Host has
                          hosted a trip, the number of nights used as part of
                          that trip will be credited back to the Host’s
                          available nights, up to the maximum of 30 nights.
                          5.25.11 Hosts will be allocated their Points as soon
                          as they have listed their Home as an Instant booking
                          listing. Hosts may spend their Points as soon as they
                          have been allocated. 5.25.12 The number of Points
                          allocated to an Instant booking listing is determined
                          at ACB’ sole discretion. The Host accepts that the
                          number of Points allocated by ACB is final and that no
                          correspondence will be entered into.. 5.25.13 A Host
                          may not make their Home inactive if they have a future
                          listing for an Instant booking on the Instant System.
                          Attempts to make Homes inactive which have future
                          Instant bookings on the Instant System may lead to ACB
                          taking action against the Host, which may include
                          termination of membership. 5.25.14 Hosts will only be
                          allowed to remove or edit their Instant booking
                          listing at ACB’ sole discretion. Hosts should contact
                          Customer Services via the details provided on our ‘Get
                          In Touch’ page in this regard www.chalihebook.com If
                          the Host is given permission to remove or edit their
                          Instant booking listing the Points allocated to the
                          Host in respect of that Instant booking listing will
                          be removed from the Host’s Points balance. 5.26 Guests
                          will be able to communicate with Hosts once the Host
                          has confirmed the Guest’s Instant booking. 5.27 Where
                          a Guest chooses to cancel an Instant booking they
                          shall be entitled to a refund of Points in accordance
                          with the cancellation table outlined at term below.
                          5.28 The terms and conditions outlined elsewhere
                          within these Terms apply to a Guest’s use of a Host’s
                          Home made through the Instant System. 5.29 ACB
                          reserves the right in its sole discretion to remove
                          members from the Instant System and/or suspend or
                          cancel a Member’s membership if a Member: 5.29.1 Is
                          determined by ACB to have breached any of these Terms;
                          or 5.29.2 Is, in ACB’ reasonable opinion, abusing the
                          Instant System. Such scenarios may include, but are
                          not limited to, creating Instant booking listings
                          which are unlikely to be booked by a Guest for the
                          sole purpose of gaining Points. 5.30 If ACB does
                          remove, suspend and/or cancel a Member’s membership
                          for any of the reasons outlined in term above the
                          Member shall not be entitled to a refund of any sums
                          paid pursuant to these Terms. 5.31 Fees and Payments
                          In consideration of the performance of the services by
                          ACB(Apptech ChaliheBook), you agree to pay ACB any
                          applicable fees as outlined within these Terms or
                          notified to you from time to time. The current
                          applicable fees are published on the ACB website. All
                          fees are subject to reasonable change, at ACB’ sole
                          discretion, from time to time. 5.31.1 All fees are
                          exclusive of any value added tax or other applicable
                          sales tax, which shall be payable by you. 5.32 ACB
                          shall not be obliged to perform the services until all
                          applicable fees are received by us. All sums must be
                          paid by debit card, credit card or bank transfer. 5.33
                          If payment is made by credit or debit card, you
                          confirm that you own the credit or debit card you
                          provided us or have the right to use it with the
                          details of (and any subsequent or replacement card you
                          ask us to use in relation to any payment to be made
                          under these Terms). All credit and debit card holders
                          are subject to validation checks and authorisation by
                          the card issuer. If the issuer of your card refuses to
                          authorise payment, we will not be responsible for any
                          non-provision of any aspect of the services. We are
                          not responsible for your card issuer or bank charging
                          you as a result of our processing of your credit or
                          debit card payment. 5.34 Communications with other
                          Members The Platform allows Members to communicate
                          with each other solely for the purpose of arranging
                          Exchanges, Points Redemptions and Instant bookings.
                          When communicating with other Members, you agree not
                          to send communications that: 5.34.1 Are unsolicited or
                          unlawful; 5.34.2 Are of a commercial or business
                          benefit and/or purposes; 5.34.3 Are charity requests
                          or petitions; 5.34.4 Contain any content which is
                          defamatory, obscene, or may have the effect of being
                          harassing, threatening or abusive to another Member,
                          individual or group of individuals on the basis of
                          religion, gender, sexual orientation, race, ethnicity,
                          age or disability or which is otherwise inappropriate;
                          5.34.5 Shall or may interrupt, damage, impair or
                          render the Platform and/or ACB service less efficient;
                          5.34.6 Transfer files containing viruses, Trojans,
                          malware or other harmful programmes; 5.34.7 Authorise,
                          encourage or assist any other person to copy, modify,
                          reverse-engineer, decompile, disassemble, alter or
                          otherwise tamper with any software (including source
                          code), databases and other technology that forms part
                          of the Platform and/or the ACB service; or 5.34.8 Are
                          otherwise inappropriate. 5.34.9 You agree to repay ACB
                          for any losses or damages it suffers as a result of
                          any claims or legal proceedings brought against us by
                          any third party arising out of your breach or alleged
                          breach of these Terms. 5.35 Sale of your Home You must
                          notify us as soon as possible in the event that:you
                          sell or transfer the legal rights to your Home or your
                          Home becomes uninhabitable due to fire, flooding,
                          subsidence or any other reason beyond your control; or
                          your Home is repossessed. 5.35.1 If you decide to sell
                          or transfer the legal rights to your Home during your
                          membership, you must make your Home inactive on the
                          ACB website and, if you have a confirmed Exchange,
                          Points Redemption or Instant booking in relation to
                          your Home, contact the Guest(s) immediately. 5.35.2 If
                          you receive notification from a Host that they are
                          selling their Home and you have a confirmed Exchange,
                          Points Redemption or Instant booking as a Guest in
                          respect of that Home, please contact our Customer
                          Services team by using the details provided on our
                          ‘Get In Touch’ page on the ACB Website
                          (www.chalihebook.com ) 5.36 Cancellation This term
                          applies to Scheme and Instant booking cancellations.
                          In the event you make a Scheme or Instant booking, the
                          cancellation provisions set out in this term apply to
                          the Points element of that booking only. 5.36.1 Your
                          cancellation will only take effect once you have:
                          5.36.2 Notified your Guest or Host; and notified
                          Apptech. 5.36.3 You can notify Apptech using the
                          contact details provided on our contact page
                          (www.chalihebook.com ) 5.36.4 Where you choose to
                          cancel your Points Redemption or Instant booking as a
                          Guest the following shall apply: 5.37 Termination of
                          your membership by you You may terminate or suspend
                          your membership at any time by giving us notice in
                          writing, provided that you have not received a
                          confirmed Exchange, Points Redemption or Instant
                          booking in respect of your listing. All Points will be
                          lost when you terminate your membership. 5.37.1 Upon
                          termination you shall lose all rights to use the ACB
                          service. 5.37.2 In the event that you terminate your
                          membership you shall not be entitled to a refund of
                          any fees paid, whether in whole or part. 5.38
                          Termination of your membership by us We reserve the
                          right to terminate or suspend your membership and
                          cancel any outstanding confirmed Exchanges, Points
                          Redemptions and/or Instant bookings if any of the
                          following occur: 5.38.1 you fail to comply with any of
                          these Terms; 5.38.2 you fail to pay any sums due to
                          ACB or any associated company or any other party in
                          connection with the ACB service or any relevant travel
                          arrangements; 5.38.3 you choose to issue legal
                          proceedings against ACB or its associated companies;
                          5.38.4 you are found to be a vexatious or serial
                          complainant who threatens or uses physical violence
                          and/or harasses, abuses or is verbally aggressive to
                          our employees or another Member; 5.38.5 you abuse your
                          rights as a Member and/or act in a manner that is
                          contrary to the interests of ACB; or 5.38.6 your
                          continued membership is or becomes contrary to any
                          law, rule, regulation or statutory instrument or if we
                          are required to terminate it by any judicial,
                          governmental, regulatory or law enforcement body or
                          court. 5.38.7 Where we suspend your membership for
                          non-payment in accordance with these Terms we also
                          reserve the right to terminate your membership at our
                          option at any time in the event that outstanding
                          payments remain unpaid. Suspended Members may be
                          readmitted to full membership on payment of all
                          outstanding sums and completion of any required
                          documentation. For the avoidance of doubt, suspended
                          Members are not entitled to any benefits of ACB
                          membership during the period of suspension. 5.39
                          Complaints ACB does not own, manage or operate any
                          Home and is not liable for their description and/or
                          presentation. As each Home is different standards may
                          vary enormously. If you have an issue with a Home
                          please contact your Host in the first instance. If you
                          are still dissatisfied and decide not to occupy the
                          Home then ACB shall have no liability for any costs
                          and expenses incurred (including, without limitation,
                          the cost of alternative accommodation) unless prior
                          authorisation to incur such costs has been given by
                          ACB in writing. 5.40 In the unlikely event that your
                          Host is unable to resolve the issue, please contact
                          ACB within 30 days of your return home by writing to
                          us at contact@chalihebook.com When writing please
                          provide your membership number and all other relevant
                          information. 5.41 Our liability to you As ACB is not
                          responsible for and does not own, manage or operate
                          any Homes we cannot accept any liability for any act
                          or omission on the part of any Member. Your use of the
                          Home may be subject to additional rules or terms
                          imposed by the Member who owns the Home. ACB’ maximum
                          liability if we are found to be at fault in relation
                          to any service we provide is limited to the sums
                          received by us for the Exchange, Points Redemption or
                          Instant booking in connection with which we are found
                          to be at fault. We do not exclude or limit any
                          liability for death or personal injury which arises
                          out of our own negligence or that of ACB employees
                          acting in the course of their employment or for our
                          own criminal act. 5.42 ACB is not liable for any
                          damage, loss or theft of or to personal property which
                          occurs through your Guests’ use of a Home. 5.43 ACB
                          accepts no liability for the acts and omissions of any
                          third parties providing non-exchange related
                          programmes or services to you. 5.44 Communicating with
                          you ACB processes personal data and responds to
                          requests you may have concerning personal data in
                          accordance with its Privacy Policy, a copy of which is
                          available at
                          https://www.lovehomeswap.com/privacy-policy . 5.45
                          Other Services Without limitation, ACB maybe can
                          provide service reservations flights, coach or train
                          travel, car hire, insurance, ferries, cruises or
                          tours. 5.46 ACB reserves the right to vary, withdraw
                          or add to the services it provides at any time, with
                          or without notice. 5.47 General These Terms and ACB’
                          policies and procedures may be changed by ACB at its
                          sole discretion from time to time. Members will be
                          notified of any such changes by publication on ACB’
                          website(s) and such changes will be effective as soon
                          as they are published. 5.48 The fees and prices
                          charged by ACB are subject to regular review and any
                          fee/price changes resulting from this review will take
                          effect immediately. Such price and fee changes will be
                          published on ACB’ website(s) (or notified to Members
                          by letter or email at ACB’ option). 5.49 Please see
                          www.Apptechegy.com www.chalihebook.com website(s) for
                          our latest Terms. The latest Terms published on ACB’
                          website(s) supersede and replace all prior versions.
                          5.50 You may not assign, transfer, declare on trust or
                          otherwise dispose of any of your rights under these
                          Terms or any other person without the prior written
                          consent of ACB. ACB may assign these Terms to any
                          third party and any such assignment shall be binding
                          on Members when notice of assignment is given to them.
                          Notice may be given on ACB’ website(s), in other ACB
                          publications or by letter or email. 5.51 ACB shall not
                          be liable for any delay in performing or failure to
                          perform its obligations under these Terms if such
                          delay or failure results from any circumstances
                          outside its reasonable control. Such delay or failure
                          shall not constitute a breach of these Terms and the
                          time for its performance shall be extended by such
                          period as is equal to that during which performance is
                          prevented. 5.52 These Terms constitute the entire
                          agreement between the parties, supersede any previous
                          agreement or understanding and may not be varied
                          except in writing by you and ACB. All other terms and
                          conditions, express or implied by statute or
                          otherwise, are excluded to the fullest extent
                          permitted by law. 5.53 Nothing in these Terms is
                          expressly or impliedly intended to confer on any third
                          party any right to enforce any of its provisions
                          pursuant to the Contract . 5.54 No waiver by either
                          party of any breach of these Terms by the other shall
                          be considered as a waiver of any subsequent breach of
                          the same of any other provision. 5.55 Any provision of
                          these Terms which is held to be invalid or
                          unenforceable in any jurisdiction shall be ineffective
                          to the extent of such invalidity or unenforceability
                          without invalidating or rendering unenforceable the
                          remaining provisions of these Terms, and any such
                          invalidity or unenforceability in any jurisdiction
                          shall not invalidate or render unenforceable such
                          provisions in any other jurisdiction. 5.56 Any notice
                          required or permitted to be given by either party to
                          the other under these Terms shall be in writing and
                          addressed to ACB at its registered office and to you
                          at the address given as your correspondence address
                          (or such other address as may at the relevant time
                          have been notified to the party giving notice pursuant
                          to this provision). 6 Payment of Rent Monthly rent
                          payments may be paid by cash or online payment is
                          dishonored and returned unpaid. Time is of the essence
                          and no excuses will be accepted. Rent shall be made
                          payable online or cash and hand delivered .All tenants
                          will contribute equally in the payment of rent and
                          only one single payment will be accepted. If any
                          tenant withdraws from the lease, for any reason, the
                          remaining tenants will be responsible for making up
                          the difference in rent. 6.1 Additions to Rent for
                          Payment of Certain Utilities Tenant will pay the cost
                          of water and electricity with the rent each month to
                          pay for electricity , water and sewer service. At the
                          end of this agreement, the Owner will compare the
                          actual billed amounts with the sum of these monthly
                          payments. If the Tenant overpaid, The Owner will
                          reimburse Tenant for the amount overpaid. If a
                          shortage exists, Tenant shall pay for the shortage
                          amount. All other utilities will be paid for directly
                          by Tenant. 6.2 Rental Collection Charge Tenant hereby
                          acknowledges that late payment will cause The Owner to
                          incur costs not contemplated by this Rental Agreement,
                          the exact amount of which will be extremely difficult
                          to ascertain. In the event rent is not received prior
                          to 5:00 P.M. on the 1st of the month, regardless of
                          cause including dishonored checks, Tenant further
                          agrees to pay a late charge to The Owner equal to
                          twenty-five dollars (25$) each week the rent is late.
                          Neither ill health, loss of job, financial emergency
                          or other excuse will be accepted for late payment. 7
                          Tenant responsibilities The house or Chalihet is
                          rented with the following appliances: Refrigerator and
                          Stove. Other appliances may be included in the rental
                          property that are the sole responsibility of the
                          tenant to upkeep. The Owner will not be responsible
                          for the upkeep of these appliances and does not
                          warrant the condition of these appliances. The above
                          rental payment specifically EXCLUDES any appliances
                          other than the refrigerator and stove. Such appliances
                          as are in the property are there solely at the
                          convenience of the Owner, who assumes no
                          responsibility for their operation. The Owner agrees
                          to remove appliances at the request of Tenant. Any
                          personal property remaining on the Premises may be
                          used by the Tenant, however the Tenant assumes sole
                          responsibility to keep said personal property in
                          working and/or operating condition, and agrees to
                          return said personal property to the Owner at the
                          termination of this Lease Agreement in the same or
                          better condition, reasonable wear excepted. 7.1
                          Bad-Check Servicing Charge In the event Tenant's check
                          is dishonored and returned of any reason to The Owner,
                          Tenant agrees to pay as additional rent the sum equal
                          to thirty-five dollars (35$) for each occurrence. This
                          amount shall be in addition to all late fees, if check
                          is not paid prior to the first of the month. If for
                          any reason a check is returned or dishonored, all
                          future rent payments will be cash or money order. 7.2
                          Use The Tenant agrees to use the premises only as a
                          residence for self, and those persons identified
                          below. By no means may Tenant allow any additional
                          persons to occupy premise beyond limit proposed by the
                          law. Tenant agrees to assume all responsibility for
                          actions taken by any person entering the property. The
                          Owner will hold Tenant solely responsible for all
                          damages to property or for violations against this
                          rental agreement. 7.3 Pets No pet shall be brought
                          onto the Premises (even temporarily) without the
                          express written permission of the Owner. If a pet has
                          been in the Premises at any time during the Tenant's
                          occupancy (with or without the Owner's consent), a
                          charge may be made for de-fleaing, deodorizing, and/or
                          shampooing, and/or damages occasioned by the pet. Any
                          animals on the property not registered under this
                          Rental Agreement will be presumed to be strays and
                          will be disposed of according to law, at the option of
                          the Owner. 7.4 Non-assignment of Rental Agreement
                          Resident agrees not to assign this agreement, nor to
                          Sub-Let any part of the property, nor to allow any
                          other person to live therein without first requesting
                          permission from the Owner and paying the appropriate
                          surcharge. Further, that covenants contained in this
                          Rental Agreement, once breached, cannot afterward be
                          performed; and that unlawful detainer proceedings may
                          be commenced. 8 Legal Obligations Tenant hereby
                          acknowledges that they have a legal obligation to pay
                          their rent on time each and every month regardless of
                          any other debts or responsibilities they may have.
                          They agree that they will be fully liable for any back
                          rent owed. They also acknowledge that defaulting on
                          this Rental Agreement could result in a judgment being
                          filed against them and a lien being filed against
                          their current and future assets and/or earnings. 8.1
                          Attorney's Cost If court action is sought by either
                          party to enforce the provisions of the Rental
                          agreement, attorney's fees and costs may be awarded to
                          the prevailing party in the court action. 8.2 Repair
                          policy The Tenant shall use customary diligence in
                          care of the Premises. The Tenant is encouraged to
                          treat this as their home, in that all minor repairs
                          are expected to be performed by or at the direction of
                          the Tenant, at the sole responsibility of the Tenant.
                          Any and all repairs made at the direction of the
                          Tenant shall be done by a competent professional, or
                          by the Tenant providing that the Tenant is capable and
                          qualified to make said repairs. All repairs shall be
                          done in compliance with all applicable codes and
                          regulations. Any repair that is estimated to cost more
                          than fifty dollars (EGP50) must receive permission of
                          the Owner prior to being made. Under no circumstances
                          will The Owner be responsible for any improvements or
                          repairs costing more that EGP50 unless the Tenant is
                          given written authorization to make repairs or
                          improvements in advance. The Tenant acknowledges
                          responsibility for any damages caused by their
                          negligence and that of their guests or invitees. 9
                          Occupancy Tenant to Maintain dwelling unit as follows:
                          9.1 Comply with all obligations primarily imposed upon
                          tenant by applicable provisions of building codes
                          materially affecting health and safety. 9.2 Keep that
                          part of the premises that he occupies and uses as
                          clean and safe as the condition of the premises
                          permit. 9.3 Dispose from his dwelling unit all
                          rubbish, garbage, and other waste in a clean and safe
                          manner. 9.4 Keep all plumbing fixtures in a dwelling
                          unit or used by the tenant as clean as its condition
                          permits. 9.5 Use in a reasonable manner all
                          electrical, plumbing, sanitary, heating, ventilating,
                          air-conditioning, and other facilities and appliances
                          including elevators in the premises. 9.6 Not
                          deliberately or negligently destroy, deface, damage,
                          impair, or remove any part of the premises or
                          knowingly permit any person to do so. 9.7 Conduct
                          himself and require other persons on the premises with
                          his consent to conduct themselves in a manner that
                          will not disturb his neighbor's peaceful enjoyment of
                          the premises. Resident warrants that he/she will meet
                          above conditions in every respect and acknowledges
                          that failure to perform the obligations herein
                          stipulated will be considered grounds for termination
                          of this agreement and loss of any or all deposits. 10
                          Security Deposit The Tenant has deposited with, and
                          the Owner acknowledges receipt of, EGP xxx as a
                          Security Deposit. This Security Deposit is to
                          guarantee the return of the Premises to the Owner in
                          the same or better condition as when accepted by the
                          Tenant, reasonable wear excepted, and to satisfy any
                          obligations of the Tenant unfulfilled at the
                          termination of this Lease Agreement, as specified
                          herein. Satisfactory compliance with this section
                          includes removing all trash and belongings of the
                          Tenant. If any provision of this Lease Agreement is
                          violated, the Security Deposit is forfeited. The
                          Security Deposit is to indemnify the Owner against
                          damage and/or loss of value as a result of the
                          Tenant's action, mistake, or inaction during the term
                          of occupancy. The Security Deposit may not be applied
                          by the Tenant as and for payment of any rent due the
                          Owner. Should the Tenant be responsible for damage
                          and/or loss of value to the Premises greater than the
                          value of the Security Deposit, the Tenant hereby
                          agrees to reimburse the Owner for such loss
                          immediately upon the presentation of a bill for said
                          damage and/or loss. The Owner shall return the balance
                          of said Security Deposit, if any, to the Tenant at the
                          Tenant's forwarding address, upon vacating, return of
                          keys to the Owner and termination of this contract
                          according to other terms herein agreed. The deposit
                          will be returned within thirty (30) days after the
                          Tenant vacates the Premises, along with an itemized
                          statement as to the deductions, if any, from said
                          Security Deposit. The Security Deposit must be paid in
                          full prior to Tenants moving into building. 11
                          Cleaning Fee Tenant hereby agrees to accept the
                          property in its present state of cleanliness. They
                          agree to return the property in the same condition or
                          better or pay a minimum EGP250 cleaning fee to cover
                          The Owner costs for having the property professionally
                          cleaned. If the Owner notifies Tenant to clean up the
                          property at any time, and the Tenant neglects to do
                          so, the Owner will charge the Tenant a minimum EGP250
                          cleaning fee. 12 Plumbing and Electricity Tenant
                          agrees not to put or pour any debris, grease, paper
                          towels, Q-tips, tampons, newspaper, food, or any other
                          matter in the sink drain or toilets. Tenant agrees to
                          pay the ENTIRE AMOUNT on bills for all sewer cleaning
                          services resulting from clogged pipes/sewer back-up.
                          Tenant must not overload electrical circuits. Only two
                          electrically operated items may be plugged in any
                          electrical receptacle. 13 Tenant Cooperation Tenant
                          agrees to cooperate with Owner/agent in showing
                          property to prospective tenant, prior to termination
                          of occupancy. 14 Removal of The Owner's Property If
                          anyone removes any property belonging to The Owner
                          without the express written consent of The Owner, this
                          will constitute abandonment and surrender of the
                          premises by Tenant and termination by them of this
                          Rental Agreement. The Owner may also take further
                          legal action. 15 Tenant Insurance No rights of storage
                          are given by this Lease Agreement. The Tenant agrees
                          to hold the Owner harmless from any liability by
                          reason of personal injury to any person and for
                          property damage occurring on or about or connected
                          with the Premises or resulting from the Tenant use
                          thereof. The Tenant hereby acknowledges this and
                          agrees to make no such claims for any losses or
                          damages against the Owner. The Tenant agrees to
                          purchase Renter's Insurance at their own expense,
                          sufficient to cover themselves and their property from
                          damage or injury caused by fire, theft, burglary, and
                          breakage, and electrical connections and hereby
                          relieves the Owner of all risks that may be insured
                          thereunder. They acknowledge that if they fail to
                          procure such insurance, it is their responsibility and
                          they alone shall bear the consequences. 16 Abandonment
                          If Tenant leaves the premises unoccupied for 15 days
                          without paying rent in advance for that month, or
                          while owing any back rent from previous months, which
                          has remained unpaid, the Owner and/or his
                          representatives have the right to take immediate
                          possession of the property and to bar the Resident
                          from returning. The Owner will also have the right to
                          remove any property that the Residents have left
                          behind and store it at Tenant's expense. 17 Lock
                          Policy No additional locks will be installed on any
                          door without the written permission of The Owner. The
                          Owner will be given duplicate keys for all locks so
                          installed at the Tenant's expense, before they are
                          installed. 18 Condition of Premises The Tenant
                          acknowledges that the said property is in good
                          condition. If there is anything about the condition of
                          the property that is not good, they agree to report it
                          to The Owner within 3 days of taking possession of the
                          property. They agree that failure to file any written
                          notice of defects will be legally binding proof that
                          the property is in good condition at the time of
                          occupancy. 19 Inventory and Inspection Record An
                          Inventory and Inspection Record has been provided for
                          the Tenant's use. Only after this has been filled out
                          (within the three-day time limit) will the Owner take
                          any action to complete the necessary repairs. The
                          Owner warrants that all major systems will be
                          functional and in good repair at time of possession.
                          Light switches, wall plugs, doors, windows, faucets,
                          drains, locks, toilets, sinks, heater, etc., will
                          either be in working order or will be repaired once
                          Tenant have completed the Inspection and Inventory
                          Record. Tenant is encouraged to report any necessary
                          repairs, no matter how slight, in writing, but they
                          are hereby advised the Owner does not normally repair
                          or replace nonfunctional items such as paint, carpets,
                          etc., every time a property changes possession. Those
                          items are scheduled for repair/replacement at regular
                          intervals regardless of tenant turnover. 20 Tenant
                          Responsibility Good housekeeping is expected of
                          everyone. Tenant agrees to keep quarters clean and in
                          sanitary condition. The Tenant agrees not to permit
                          any deterioration or destruction to occur while they
                          are occupying the property. They agree to maintain the
                          walls, woodwork, floors, furnishings, fixtures and
                          appliances (if any), windows, screens, doors, fences,
                          plumbing, air-conditioning and heating, electrical and
                          mechanical systems as well as the general structure
                          and appearance of the property. Tenant agrees to
                          follow all The Owner instructions, especially where
                          posted. 21 Alterations Tenant shall make no
                          alterations, decorations, additions or improvements in
                          or to the premises without the Owner's prior written
                          consent, and then only by contractors or mechanics
                          approved by The Owner. All alterations, additions, or
                          improvements upon the premises, made by either party,
                          shall become the property of The Owner and shall
                          remain upon, and be surrendered with said premises, as
                          a part thereof, at the end of the term hereof. The
                          Tenant specifically agree that no tacks, nails,
                          screws, etc., will be driven into the walls, nor will
                          they be marred or torn by glue or tape. They also
                          acknowledge that they will be responsible for and pay
                          any damage done by rain, wind, hail, tornadoes,
                          hurricanes, etc., if this damage is caused by leaving
                          windows open, allowing stoppage and/or overflow or
                          water and/or sewage pipes, broken windows or doors,
                          torn screens, broken door and window locks, etc. or
                          any damage caused while Tenant has occupancy. 21.1
                          Maintenance of Lawns The Tenant acknowledges that they
                          are responsible for maintaining the lawns and
                          landscaping and will be held liable for any damage
                          caused by lack of water, abuse, or neglect. 21.2
                          Vehicle Policy The Tenant agrees never to park or
                          store a motor home, camper, trailer, boat, or any sort
                          of recreational vehicle on the premises and to park
                          only automobiles only on the paved areas provided.
                          Junk cars, cars on blocks, non-functional vehicles, or
                          unlicensed automobiles are not permitted on property.
                          Removal will be at the expense of the Tenant. Tenant
                          agrees that any vehicle parked on unpaved areas may be
                          towed and stored at Tenant expense. Tenant agrees to
                          pay for any fines resulting from a summons issued to
                          The Owner resulting from improper parking. The Tenant
                          must follow rules and laws of the city Parking
                          Department concerning parking. Tenant must obtain all
                          necessary parking permits and information for himself
                          and guests. The Owner is not responsible for tenant’s
                          parking needs. Off street parking is not provided by
                          the Owner, unless otherwise noted in this agreement.
                          21.3 Utilities Tenant will be responsible for payment
                          of all utilities, garbage, water and sewer charges,
                          telephone, gas or other bills incurred during their
                          residency. Tenant specifically authorizes The Owner to
                          deduct amounts of unpaid bills from their Security
                          Deposits in the event they remain unpaid after
                          termination of this agreement. (See section 3 for
                          details on payment of certain utilities). 21.4 Roof
                          and Termite Alert Tenant agrees to notify The Owner
                          immediately if roof leaks, water spots appear on
                          ceiling, or at the first sign of termite activity. 22
                          Non-Liability The Tenant hereby states that any work
                          or repairs that need to be done will be handled by
                          competent professionals, unless Tenant is qualified
                          and capable of doing the work themselves and doing it
                          properly, in a safe manner that meets all federal,
                          state, and local regulations. Tenant further state
                          that they will be legally responsible for any mishap
                          they either do themselves or hire others to do. The
                          Owner will be held free from harm and liability along
                          with his agents and representatives. In the event that
                          needed repairs are beyond the Tenant capacity, they
                          are urged to arrange for professional help. 22.1
                          Disclosure of The Owner Agent The Owner may be
                          represented at various times by his employees or
                          agents, who will carry identification. Owner's address
                          is: 22.2 Validity of Lease Provisions Any provision
                          set forth in this Rental Agreement which is contrary
                          to the state Residential The Owner and Tenant laws
                          shall be treated by The Owner and Tenant as void and
                          as if it were not set forth herein, but all other
                          provision of the Rental Agreement shall remain in full
                          force and effect. 22.3 Phone The tenant agrees to get
                          a phone installed in the premises as soon as possible.
                          The Owner will be given the phone number within two
                          working days of installation and will be notified
                          within two working days of any future changes in the
                          phone number. 22.4 Access to Premises The Owner
                          reserves the right to enter the residence at
                          reasonable times to inspect, make necessary repairs,
                          supply services or show it to prospective residents,
                          purchasers, mortgages, workmen, or contractors.
                          Whenever practicable, a 24-hour notice of the Owner's
                          intent to enter shall be given to the Resident. The
                          Owner may also display "for rent" and "for sale" signs
                          on the building of which the rented residence is a
                          part. 22.5Pest-Control Policy Resident is responsible
                          for any ongoing pest control service, if the Resident
                          desires such a service. Owner is not responsible for
                          any damage done to the Resident's person, or property
                          by such pests, or to the person or property of
                          Resident's family or any other persons on the
                          premises. 22.6 City, County, or State Violations
                          Tenant is responsible for paying all violation fees
                          issued against the house by the city, county or state
                          for non-compliance to city, county or state laws. If
                          the Owner is required to appear in court, tenant shall
                          pay an additional EGP350 fee to compensate the Owner
                          for his time. Note: The City, Department of
                          Inspections completes random neighborhood inspections
                          each season. They FREQUENTLY issue violations for such
                          items as “leaving garbage at curb on non-collection
                          day”, “did not shovel snow within 24 hours of
                          snowstorm”. 23 Waiver All rights given to The Owner by
                          this agreement shall be cumulative in addition to any
                          laws that exist or might come into being. Any exercise
                          of any rights by The Owner or failure to exercise any
                          rights shall not act as a waiver of those or any other
                          rights. No statement or promise by The Owner, its
                          agents or employees, as to tenancy, repairs, amount of
                          rent to be paid, or other terms and conditions shall
                          be binding unless it is put in writing and made a
                          specific part of this agreement. 24 Legal Binding
                          Tenant hereby states that they have the legal rights
                          to sign for any and all other residents and to commit
                          them to abide by this contract. 24.1 Terms In this
                          agreement the singular number where used will include
                          the plural, the masculine gender will include the
                          feminine, the term Owner will include The Owner,
                          Lessor; and the term Resident will include Tenant,
                          Lessee. 24.2 Full Disclosure The Tenant signing this
                          Rental Contract hereby state that all questions about
                          this Rental Agreement have been answered, that they
                          fully understand all the provisions of the agreement
                          and the obligations and responsibilities of each
                          party, as spelled out herein. They further state that
                          they agree to fulfill their obligations in every
                          respect or suffer the full legal and financial
                          consequences of their actions or lack of action in
                          violation of this agreement. Signature by the Tenant
                          on this Rental Agreement is acknowledgment and he/she
                          has received a signed copy of the Rental Agreement. 25
                          Compliance with Laws; Privacy and Security
                          Obligations. You, your Content, and your Devices must
                          comply with all applicable laws, rules, regulations,
                          orders, and other requirements of governmental
                          agencies ("Laws"). In addition, if you (or any
                          third-party plug-in or service provider you use) have
                          access to any name, password, other login information,
                          or personally identifiable information or personal
                          data of any end user based on any use of or
                          interaction with your Content or Devices, you will :-
                          (i) provide legally adequate privacy notices to such
                          end user, (ii) obtain any necessary consent from the
                          end user for the collection, use, transfer, and
                          storage of the information, (iii) use and authorize
                          others to access and use the information only for the
                          purposes permitted by the end user, and (iv) ensure
                          the information is collected, used, transferred, and
                          stored in accordance with applicable privacy notice(s)
                          and applicable Laws. If you suspect or become aware of
                          any security vulnerability related to your Content or
                          Devices that may adversely affect the Application end
                          users' use of or access to the Applications, then you
                          will immediately notify us and will take all
                          appropriate steps to remedy such vulnerability,
                          including cooperating with us. 26 Prohibited Actions.
                          You may not reverse engineer, disassemble or decompile
                          any binary code used in connection with the
                          Applications, including any Applications Materials we
                          provide you. You will not take any action related to
                          the Applications that interferes with, damages, or
                          accesses or uses in any unauthorized manner the
                          hardware, software, networks, technologies, or other
                          properties or services of ours or of any end user or
                          third party. 27 Our Operations. We have sole
                          discretion to determine all features and operations of
                          the Applications and to change the Applications from
                          time to time. You acknowledge that we have no
                          obligation to promote, distribute, or offer for sale
                          any App, to permit you or your Content or Devices to
                          use any Applications Materials, or to continue any of
                          the foregoing once begun. We are responsible for and
                          have sole discretion related to processing payments,
                          collecting payments, addressing requests for refunds,
                          and providing customer service related to our
                          obligations, and we have sole ownership and control of
                          all sales and other data we obtain from end users in
                          connection with the Applications. 28 Product
                          Information. "Product Information" is any information
                          Apptech or you provide about your Content or Devices,
                          including product name, product description, icon,
                          image, logo, and other descriptive or identifying
                          information and materials associated with you or a
                          particular App or Device. You will provide us with any
                          Product Information we request. You are responsible
                          for providing accurate Product Information, and will
                          not make any false, inaccurate, or misleading claims
                          or statements regarding any Content or Devices or
                          otherwise mislead end users regarding any Content or
                          Devices. If any Product Information is inaccurate or
                          needs to be updated or modified, you will promptly
                          provide us with corrections, updates, or
                          modifications. 29 Reservations of Rights. Subject to
                          the rights granted in this Agreement and our ownership
                          of the Applications Materials, as between you and us,
                          you retain all right, title and interest in and to
                          your Content and Devices. Subject to your rights in
                          such Content and Devices, we retain all right, title
                          and interest in and to the Applications, Applications
                          Materials, and all other technology, content,
                          information, services, trademarks and other
                          intellectual property used in connection with the
                          Applications are belong to Apptech and considered as
                          Apptech properties . All goodwill associated with use
                          of a party's (or its affiliates') brand features in
                          connection with this Agreement will inure solely to
                          the party owning such brand features. We will be free
                          to exercise all rights in any suggestions, ideas, or
                          other feedback you provide to us about the
                          Applications or Applications Materials, without
                          restriction and without compensating you. 30 Term and
                          Termination; Suspension. The term of this Agreement
                          (the "Term") will begin on the date you click to
                          accept it and will continue until you or we terminate
                          it. We may, at any time, immediately suspend or
                          terminate this Agreement and your Applications account
                          (including access to your Applications account) if (i)
                          you have breached this Agreement, (ii) we determine
                          that your participation in the Applications exposes
                          Apptech, end users or others to risk of liability or
                          harm, or (iii) we are required to do so by Law. We may
                          also suspend or terminate this Agreement and your
                          Applications account (including access to your
                          Applications account) at any time, unless we specify a
                          later effective date. You are entitled to terminate
                          this Agreement at any time by giving us at least 10
                          days advance written notice. We are not obligated to
                          return any Content, Devices, or other materials that
                          you provide. The terms in this section do not limit
                          our ability to restrict access to or availability of
                          any Content. The following provisions of this
                          Agreement will survive termination of this Agreement:
                          Sections 1 through 6, 8 through 16, all Developer
                          representations and warranties in this Agreement, and
                          any other provisions that, by their nature or terms,
                          are intended to survive. 31 Representations and
                          Warranties. You represent, warrant and covenant that:
                          a You are at least the legal age of majority and that
                          you are able to form a legally binding contract. If
                          Developer is a business or other legal entity and not
                          an individual, then the individual entering into this
                          Agreement on Developer's behalf represents that he or
                          she has all necessary legal authority to bind
                          Developer to this Agreement; b You have the full
                          right, power, and authority to enter into and fully
                          perform this Agreement; c Before providing us or any
                          end user any Content, you will have obtained the
                          rights necessary for the exercise of all rights
                          granted under this Agreement, and you will be solely
                          responsible for and will pay any licensors or
                          co-owners any royalties or other monies due to them
                          related to such Content; d None of the following will
                          violate any Law; require us to obtain any license,
                          authorization, or other permission from any
                          governmental agency or other third party; contain any
                          defamatory material; or violate or infringe any
                          intellectual property, proprietary, or other rights of
                          any person or entity (including contractual rights,
                          copyrights, trademarks, patents, trade dress, trade
                          secret, common law rights, rights of publicity or
                          privacy, or moral rights): (i) the exercise of any
                          rights granted under this Agreement; (ii) any of your
                          Content or Devices; or (iii) your sale, distribution,
                          or promotion of any Content or Device; e Your Content
                          and Devices will not contain any viruses, spyware,
                          "Trojan horses", or other "malware" or harmful code,
                          and will not cause injury to any person or damage to
                          any property; f You will comply with the terms
                          governing any open source software or other
                          intellectual property used in any of your Content,
                          including by providing all required attributions and
                          notices; g Your Content may be imported to, exported
                          from, and lawfully used in all countries in which we
                          operate the Applications, and all countries in which
                          you've authorized sales to end users (without the need
                          for us to obtain any license or clearance or take any
                          other action) and your Content is in full compliance
                          with all applicable Laws governing imports, exports,
                          and use, including those applicable to software that
                          incorporates or makes use of information security
                          technology, including but not limited to encryption
                          technology; and h You (and all parties that own or
                          control you) are not subject to sanctions or otherwise
                          designated on any list of prohibited or restricted
                          parties maintained by the United States government or
                          other applicable government authority. You will comply
                          with all United States and other export and re-export
                          restrictions that apply to any software, technology,
                          goods, or services you use or receive in connection
                          with this Agreement. 32 Indemnity. You will indemnify,
                          defend and hold us (including any respective officers,
                          directors, employees, contractors and assigns)
                          harmless from and against any loss, expense, claim,
                          liability, damage, action or cause of action
                          (including reasonable attorneys' fees) that arises
                          from any third-party claim relating to any Content or
                          Device, or any breach of your representations,
                          warranties or obligations set forth in this Agreement
                          (individually, a "Claim", and collectively, the
                          "Claims"). You will not consent to the entry of a
                          judgment or settle a Claim without our prior written
                          consent, which may not be unreasonably withheld. You
                          will use counsel reasonably satisfactory to us to
                          defend each Claim. If we reasonably determine that a
                          Claim might adversely affect us, we may take control
                          of the defense at our expense (but without limiting
                          your indemnification obligations). Your obligations
                          under this Section 11 are independent of your other
                          obligations under the Agreement. 33 Confidentiality.
                          You will: (a) protect and not disclose information
                          made available by us that is identified as
                          confidential or that reasonably should be considered
                          confidential; (b) use that information only to fulfill
                          your obligations or exercise your rights under this
                          Agreement; (c) either destroy or return all such
                          information to us promptly when the Agreement
                          terminates (and, upon request, confirm such
                          destruction in writing). This paragraph covers all
                          confidential information regardless of when you
                          receive it. 34 Trademarks; Publicity. Under our
                          trademark, brand, and marketing guidelines available
                          on our developer portal (collectively, the "Trademark
                          Guidelines"), we may make certain trademarks, logos,
                          badges, or trade dress available for you to use to
                          promote your Content and Devices and your
                          participation in the Applications. You must comply
                          with the Trademark Guidelines in your use of those
                          trademarks, logos, badges, and trade dress. Unless you
                          have received our express written permission, you will
                          not otherwise use any trademark, service mark, trade
                          name, commercial symbol, domain, trade dress, or other
                          proprietary right of ours (or any variant thereof),
                          issue press releases or other publicity relating to
                          us, the Applications, or this Agreement, or refer to
                          us in promotional materials. You will not adopt or
                          attempt to register any proprietary right of ours (or
                          any variant thereof). 35 Disclaimers and Limitations
                          of Liability. the Applications and any Applications
                          materials are provided "as is." we and our licensors
                          will in no event be liable for any unavailability or
                          malfunction of all or any portion of the Applications
                          or Applications materials, loss of data or content,
                          loss of profits or goodwill, cost of cover, or other
                          special, incidental, consequential, indirect,
                          exemplary or reliance damages arising from or in
                          relation to this agreement, or for any equitable
                          remedy of disgorgement or otherwise, however caused
                          and regardless of theory of liability, even if we have
                          been advised of the possibility of those damages. we
                          specifically disclaim, with respect to the
                          Applications materials and all other services,
                          software, content, or products provided by or on
                          behalf of us in connection with this agreement or the
                          Applications, all warranties, express, implied, or
                          statutory, including the implied warranties of
                          merchantability, fitness for a particular purpose, and
                          non-infringement. we will have no liability arising
                          from a failure of any end user to comply with any
                          terms of use regarding the Applications or otherwise.
                          in no event will our aggregate liability under this
                          agreement o however, this does not limit our
                          obligation to pay royalties due and payable to you
                          under this agreement. these limitations and
                          disclaimers apply except to the extent prohibited by
                          applicable law. 36 Cookies collection Cookies are
                          messages that web servers pass to your web browser
                          when you visit Internet sites. Your browser stores
                          each message in a small file, called cookie. txt . ...
                          These files typically contain information about your
                          visit to the web page, as well as any information
                          you've volunteered, such as your name and interests
                          Apptech has the right to collect users cookies and use
                          it .Cookies massage will appear in the application
                          website to be agreed by the user . 37 Agreement
                          Changes. We reserve the right to change this Agreement
                          at any time in our discretion. We will give you notice
                          of the changes by posting an updated version of this
                          Agreement online or by emailing you at an email
                          address you have provided. Changes to the payment of
                          Royalties will be effective 30 days after we post them
                          or otherwise notify you of them. Any other changes to
                          the Agreement will be effective 15 days after we post
                          them or otherwise notify you of them, unless we
                          specify a different effective date when we make a
                          particular change. However, we may change this
                          Agreement with effect as of the date we post the
                          changes or otherwise notify you of them, to change
                          existing features or add additional features to the
                          Applications that do not materially adversely affect
                          your participation in the Applications, or for legal,
                          regulatory, fraud or abuse prevention, or security
                          reasons. You are responsible for checking for
                          Agreement updates. Your continued participation in the
                          Applications after changes to this Agreement take
                          effect will constitute your acceptance of the changes.
                          If you do not agree to a change, you must stop
                          participating in the Applications and terminate this
                          Agreement. 38 General. This Agreement may not be
                          amended except in writing signed by both parties and
                          as provided in Section 15 above. If any provision of
                          this Agreement is held invalid by a court with
                          jurisdiction over the parties to this Agreement, such
                          provision will be deemed to be restated to reflect as
                          nearly as possible the original intentions of the
                          parties in accordance with applicable law, and the
                          remainder of this Agreement will remain in full force
                          and effect. The word "including" will be interpreted
                          without limitation when used in this Agreement. The
                          parties to this Agreement are independent contractors
                          and nothing creates a partnership, joint venture, or
                          similar relationship. Each party will bear its own
                          costs and expenses in performing this Agreement. Each
                          party may use one or more subcontractors to exercise
                          its rights and perform its obligations hereunder. Each
                          party will be responsible for ensuring that its
                          subcontractors comply with the applicable portions of
                          this Agreement when performing work on its behalf and
                          will be liable for any noncompliance. Our failure to
                          enforce any provision of this Agreement will not
                          constitute a waiver of our rights to subsequently
                          enforce the provision. You are responsible for
                          identifying and paying all taxes and other
                          governmental fees and charges (and any penalties,
                          interest, and other additions thereto), if any, that
                          are imposed upon or with respect to your participation
                          in the Applications. Each Apptech Party is severally
                          liable for its own obligations under this Agreement
                          and is not jointly liable for the obligations of other
                          Apptech Parties. The rights granted to Apptech.com
                          Int'l Sales, Inc. under this Agreement are only for
                          sale, distribution, and promotion of Apps outside of
                          the United States. You may not assign any of your
                          rights or obligations under this Agreement, whether by
                          operation of law or otherwise, without our prior
                          written consent, except that you may assign all of
                          your rights and obligations under this Agreement to
                          any corporation or other entity without consent in
                          connection with a merger or the sale of all or
                          substantially all of your assets as long as you give
                          us written notice of any such assignment no later than
                          ten business days before such assignment. Subject to
                          the foregoing limitation, this Agreement will be
                          binding upon, inure to the benefit of and be
                          enforceable by the parties and their respective
                          successors and assigns. This Agreement and the
                          Applications Materials License constitute the entire
                          agreement between the parties with respect to its
                          subject matter, supersedes any and all prior or
                          contemporaneous agreements between the parties with
                          respect to its subject matter, and does not give any
                          third party (except where specified) any rights or
                          remedies hereunder. Any notice or other communication
                          to be given hereunder will be in writing and given (i)
                          by us via email, via a posting on our developer portal
                          or in the Applications Policies, or via a message
                          through your Applications account, or (ii) by you via
                          email to apps-notices@Apptechegy.com with a cc via
                          email to contracts-legal@Apptechegy.com, or to such
                          other email or physical addresses as we may specify
                          from time to time. The date of receipt will, in the
                          case of email, be deemed the date on which such notice
                          is transmitted. Distribution Schedule The terms of
                          this Schedule apply if you submit any App for sale,
                          distribution, or promotion through the Applications.
                          for PC Games and PC Software will be based on our
                          determination of an end user's country. 30 Grants of
                          Rights a- Distribution. You hereby grant us the
                          nonexclusive, irrevocable royalty-free right to sell,
                          distribute, and make available your Apps through the
                          Applications to end users in the Territory by all
                          means of electronic distribution available now or in
                          the future. You also hereby grant us the nonexclusive,
                          irrevocable, royalty-free, worldwide rights to (i)
                          use, evaluate and test your Content; (ii) reproduce
                          and store your Apps in digital form on one or more
                          computer facilities for the purpose of promoting,
                          selling and distributing the Apps and in connection
                          with the Applications; (iii) modify and add to your
                          Apps so that we can collect analytics relating to the
                          Apps, evaluate and enforce our Applications Policies,
                          and share aggregated information with you and others
                          regarding the Applications; (iv) modify and add to
                          your Mobile Apps so we can (at your option) enforce
                          digital rights management ("DRM"); (v) add metadata to
                          your Mobile Apps so we can improve their compatibility
                          with Apptech devices; and (vi) retain, after the Term,
                          one or more electronic copies of each App and
                          associated Content and allow access to and downloads
                          and re-downloads of Apps by end users as provided in
                          this Agreement. For Skills, the distribution rights
                          set forth in the Skills Schedule apply in lieu of the
                          rights set forth in this Section 3a. You acknowledge
                          that we may allow end users who have purchased an App
                          to download unlimited copies of that App. For
                          avoidance of doubt, if end users download or access an
                          App that is free of charge, that App will be deemed to
                          be "purchased" by the end user for purposes of this
                          Agreement. 31 Promotion. You hereby grant us the
                          nonexclusive, irrevocable, royalty-free, worldwide
                          rights to use, reproduce, distribute, reformat,
                          modify, create excerpts from, promote, advertise,
                          transmit, and publicly display and perform in any and
                          all digital and other formats (i) the Product
                          Information for promotional purposes in connection
                          with the Applications(except that we will not use any
                          trademarks you provide for purposes of us selling an
                          App after the withdrawal of that App as described in
                          Section 6 of this Schedule or after the Term) and (ii)
                          your Apps and other Content in order to create limited
                          promotional excerpts and in order to allow end users
                          to try your Apps for a limited time without
                          downloading or installing them. 32 Support. Apptech
                          and You will provide reasonable technical and product
                          support for your Content as requested by end users or
                          us or as described in our Applications Policies. Your
                          technical support will include levels of availability,
                          response times and technical skills that are at least
                          equivalent to those for the support you provide to end
                          users of Similar Services. Without limiting the
                          previous sentence, at a minimum you will respond
                          within 24 hours to any support request that we
                          identify as critical, and in all other cases within
                          five business days of request from an end user or us.
                          A "Similar Service" is any online service that makes
                          any digital products or services similar to those
                          sold, distributed or promoted through the Applications
                          available to end users using a mode of sale or
                          distribution similar to those used by the
                          Applications, including any mobile or Internet-based
                          application marketing, sales, and distribution
                          service. 33 App Testing Service. We may provide you
                          access to services ("App Testing Services") that allow
                          you to invite end users you designate ("Testers") to
                          download or enable an App (such as a Mobile App or an
                          Skill), or a version of an App, before you make it
                          available to the general public (a "Test App").
                          Testers will not be charged, and we will not pay you a
                          Royalty, for the purchase of Test Apps or any In-App
                          Products made available in Test Apps. If, after
                          distributing a Test App through an App Testing
                          Service, you make a version of that Test App available
                          to the general public (including through any Similar
                          Service), (i) you will submit that App for
                          distribution through the Applications and (ii) We may
                          give to each Tester, without charge and without paying
                          you a Royalty, that App and any In-App Products the
                          Tester purchased in the Test App (or alternate In-App
                          Products of equal or lesser value). You are
                          responsible for selecting all Testers and ensuring you
                          have obtained any consents necessary to share the
                          Testers' contact information with us and for us to
                          invite the Testers to participate in an App Testing
                          Service. 34 App Availability Withdrawal. We may
                          determine in our discretion whether to make any App
                          available through the Applications. We may stop any
                          transaction or take other actions as needed to
                          restrict access to or availability of any Content that
                          does not comply with this Agreement or that otherwise
                          might adversely affect end users. Any withdrawal of an
                          App does not relieve you of responsibility to ensure
                          the App complies with this Agreement or to perform
                          other obligations under this Agreement. Subject to
                          other terms of this Agreement, you may withdraw an App
                          from further sale through the Applications as of a
                          specified date by giving us notice. We will use
                          commercially reasonable efforts to stop selling the
                          App within 10 business days after we receive such
                          notice, and within 5 business days after such receipt
                          in connection with a withdrawal request which you've
                          designated as necessary because of an unexpected loss
                          of (or third party claim related to) the rights
                          required under this Agreement. You will immediately
                          notify us if you unexpectedly lose such rights or
                          become aware of a third-party claim related to these
                          rights. Any withdrawal by you will apply only to
                          future end user purchases after the withdrawal date
                          and not to purchases that have already occurred,
                          unless we otherwise determine in our discretion. 35
                          Termination; Survival. If the Agreement is terminated,
                          we will stop selling the Apps or products as of the
                          date the termination takes effect. Unless we otherwise
                          determine in our discretion, any termination or
                          suspension of your participation in the Applications
                          will not affect further access, use, downloads or
                          re-downloads of Apps by end users who have purchased
                          the App before the termination or suspension takes
                          effect. 36 Product Information. Your product
                          descriptions for In-App Products must disclose how the
                          In-App Product is used and any restrictions on end
                          users' use or access to the In-App Product. At the
                          time you submit an In-App Product for inclusion in the
                          Applications, you must identify if it (a) makes
                          content or services available to end users on a
                          subscription basis (a "Subscription In-App Product")
                          or (b) is limited to a specific number of uses or is
                          otherwise intended to be used up or consumed in the
                          course of using the applicable software application or
                          game (e.g., single use items or virtual coins in a
                          game) (a "Consumable In-App Product"). Your product
                          descriptions for Subscription In-App Products must
                          disclose the content and services included in the
                          subscription, the frequency with which new content
                          will be delivered during the subscription period (if
                          applicable), and whether or not content delivered
                          during the subscription will continue to be accessible
                          by the end user following the termination or
                          expiration of the subscription (if applicable). Your
                          product descriptions for Consumable In-App Products
                          must disclose that the product is consumable and how
                          the product is used and consumed in the App. 37
                          Fulfillment of In-App Products. You are responsible
                          for fulfilling to end users all purchases of In-App
                          Products. We may provide a hosting and delivery
                          service to facilitate the fulfillment of certain types
                          of In-App Products; however, you are responsible for
                          providing all other hosting, delivery, and related
                          services necessary to deliver and enable your In-App
                          Products. Upon an end user's purchase of an In-App
                          Product, you will promptly deliver (if applicable) and
                          enable the In-App Product for that end user. You must
                          fulfill Subscription In-App Products throughout the
                          entire subscription period purchased by the applicable
                          end user. You will ensure that all In-App Products
                          match the applicable product description and other
                          Product Information, function as intended, and
                          otherwise comply with the Agreement, and the
                          applicable Applications Policies. You agree that the
                          Royalties payable to you under this Agreement
                          constitute full and complete compensation for all
                          hosting, delivery, and other services you perform or
                          provide in connection with the sale and fulfillment of
                          In-App Products. 38 Royalties for In-App Products.
                          Royalties for In-App Products will be calculated and
                          paid as provided in the Distribution Schedule.
                          However, no Royalty is due for (a) Subscription In-App
                          Products that we make available to end users at no
                          charge as part of free trial subscriptions or other
                          promotional offers that you approve or (b)
                          Subscription In-App Products that are intended to be
                          accessed or used within Mobile Apps listed in our News
                          or Magazine categories (or similar or successor
                          categories) that we make available to end users at no
                          charge as part of free trial subscriptions or other
                          promotional offers of up to 30 days (or any longer
                          period you approve). We may auto-renew end users'
                          purchases of Subscription In-App Products, and for
                          sales of Subscription In-App Products to renewing
                          subscribers, your Royalty will be calculated as
                          follows: (i) for PC Games (including PC Game In-App
                          Products) and PC Software (including PC Software
                          In-App Products), your Royalty will be calculated
                          based on the current Retail Price; and (ii) for
                          renewals of Subscription In-App Products for all other
                          types of Apps, your Royalty will be calculated based
                          on the lower of (A) the then current List Price and
                          (B) the List Price in effect at the time the
                          applicable end user first subscribed. For purposes of
                          calculating Royalties for Subscription In-App
                          Products, our determination of subscription category
                          (e.g. movies and TV) will be final.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </fieldset>
                <Row>
                  <Col span={17} offset={4}>
                    <fieldset class="scheduler-border">
                      <legend class="about-location">Refund Policy</legend>
                      <div class="control-group">
                        <Row>
                          <Col span={24}>
                            <p className="refund-paragragh">
                              You can cancel your Chalitbook membership at any
                              time, and you will continue to <br /> have access
                              to the Chalitbook service through the end of your
                              billing period. To the <br /> extent permitted by
                              the applicable law, payments are non-refundable
                              and we do not <br />
                              provide refunds or credits for any partial
                              membership periods or Unused Chalitbook <br />{" "}
                              content.
                            </p>
                          </Col>
                        </Row>
                      </div>
                    </fieldset>
                    <Row>
                      <Col span={10} offset={10}>
                        <div className="ml-4 h3 social-section">
                          <i class="fab fa-facebook-square mr-2"></i>
                          <i class="far fa-envelope mr-2"></i>
                          <i class="fab fa-twitter mr-2"></i>
                          <i class="fab fa-instagram mr-2"></i>
                          <i class="fab fa-whatsapp mr-2"></i>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col span={10} offset={1}>
                <img
                  className="about-img refund-img"
                  src="/images/refund.png"
                  alt="about us"
                />
              </Col>
            </Row>
          </Content>
        </Layout>
        <Row>
          <Col span={24}>
            <Foter />
          </Col>
        </Row>
      </Layout>
    </div>
  );
}
const mapStateToProps = (reduxState) => {
  return {
    auth: reduxState.Users.auth,
  };
};
export default connect(mapStateToProps)(Refund);
