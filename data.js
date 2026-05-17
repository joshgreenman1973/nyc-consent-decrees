const TIMELINES = {
  "nunez-doc": [
    { year: 2011, event: "Class action filed", actor: "Legal Aid + ECBAWM", kind: "event" },
    { year: 2015, event: "Consent judgment entered; Steve J. Martin (Tillid Group) appointed federal monitor", kind: "entered" },
    { year: 2017, event: "First major use-of-force reforms phased in", kind: "event" },
    { year: 2020, event: "Monitor reports describe \"alarming\" violence levels", kind: "event" },
    { year: 2022, event: "Action Plan ordered; additional reform deadlines imposed", kind: "modification" },
    { year: 2023, event: "Monitor reports city in non-compliance on use-of-force and supervision", kind: "event" },
    { year: 2024, event: "Court finds City in contempt of 18 consent-judgment provisions", actor: "Judge Laura Taylor Swain", kind: "contempt" },
    { year: 2025, event: "Court orders appointment of Remediation Manager with sweeping authority", kind: "modification" },
    { year: 2026, event: "Nicholas Deml named Remediation Manager (Jan 27)", kind: "monitor" }
  ],
  "floyd-nypd": [
    { year: 2008, event: "Class action filed challenging NYPD stop-and-frisk", actor: "CCR + co-counsel", kind: "event" },
    { year: 2013, event: "Liability ruling (Aug): pattern of unconstitutional and racially discriminatory stops; Peter Zimroth appointed federal monitor", actor: "Judge Shira Scheindlin", kind: "entered" },
    { year: 2013, event: "Second Circuit removes Scheindlin from case", kind: "event" },
    { year: 2014, event: "Reassigned to Judge Analisa Torres; reforms proceed", kind: "event" },
    { year: 2017, event: "Joint Remedial Process recommendations submitted", kind: "event" },
    { year: 2022, event: "Mylan L. Denerstein (Gibson Dunn) succeeds Zimroth as monitor", kind: "monitor" },
    { year: 2024, event: "Monitor reports persistent undocumented stops and supervisory rubber-stamping", kind: "event" },
    { year: 2026, event: "Monitor: 11% of audited stops unconstitutional; ~⅓ of encounters unreported or miscategorized", kind: "event" }
  ],
  "handschu-nypd": [
    { year: 1971, event: "Class action filed by political activists challenging NYPD \"Red Squad\" surveillance", kind: "event" },
    { year: 1985, event: "Original Handschu Consent Decree entered; Handschu Authority created", kind: "entered" },
    { year: 2003, event: "Modified Handschu Guidelines relax post-9/11 restrictions", kind: "modification" },
    { year: 2017, event: "Revised settlement (joint with Raza) adds equal-protection bar and Civilian Representative", kind: "modification" },
    { year: 2017, event: "Stephen Robinson appointed first Civilian Representative", kind: "monitor" },
    { year: 2023, event: "Muhammad U. Faridi succeeds Robinson as Civilian Representative", kind: "monitor" },
    { year: 2025, event: "Judge Haight takes inactive senior status (May)", kind: "event" },
    { year: 2026, event: "Seventh Annual Report of the Civilian Representative filed (Jan 27)", kind: "event" }
  ],
  "nycha-hud-agreement": [
    { year: 2015, event: "SDNY US Attorney investigation begins; NYCHA admits false lead-inspection certifications", kind: "event" },
    { year: 2018, event: "US v. NYCHA complaint filed; original settlement rejected by court", kind: "event" },
    { year: 2019, event: "Revised HUD Agreement approved; Bart Schwartz (Guidepost Solutions) appointed federal monitor", kind: "entered" },
    { year: 2020, event: "City commits $2.2B over 10 years to lead, mold, heat, elevator work", kind: "modification" },
    { year: 2023, event: "Agreement extended an additional 5 years (May)", kind: "modification" },
    { year: 2024, event: "Schwartz steps down; Neil Barofsky + Matt Cipolla (Jenner & Block) take over as co-monitors (Feb)", kind: "monitor" },
    { year: 2024, event: "New co-monitors issue first mixed-review report (Sep)", kind: "event" }
  ],
  "baez-nycha-mold": [
    { year: 2013, event: "Class action filed by NYCHA tenants with asthma", actor: "NRDC + NCLEJ", kind: "event" },
    { year: 2014, event: "Initial consent decree entered", kind: "entered" },
    { year: 2018, event: "Revised consent decree adds Ombudsperson, Special Master, deadlines", kind: "modification" },
    { year: 2021, event: "Judge William Pauley III dies; case reassigned", kind: "event" },
    { year: 2023, event: "Mold-complaint backlog hits 90,589 (from 35,718 in 2019)", kind: "event" },
    { year: 2024, event: "Ten-year review: decree transformed response but delays persist", kind: "event" }
  ],
  "brad-h-doc-dohmh": [
    { year: 1999, event: "Class action filed against City's middle-of-the-night discharge practice", actor: "Urban Justice Center + NYLPI", kind: "event" },
    { year: 2003, event: "Settlement entered requiring discharge planning for incarcerated people with mental illness", kind: "entered" },
    { year: 2016, event: "43% of incarcerated people receiving Brad H. flag", kind: "event" },
    { year: 2025, event: "Brad H. flag rate up to 57%; Comptroller audits follow-up", kind: "event" }
  ],
  "callahan-shelter": [
    { year: 1979, event: "Robert Hayes files case on behalf of homeless men", kind: "event" },
    { year: 1981, event: "Consent decree entered: right to shelter for single adult men", kind: "entered" },
    { year: 1983, event: "Eldredge extends decree to single women", kind: "modification" },
    { year: 2008, event: "Boston successor agreement covers families with children", kind: "modification" },
    { year: 2023, event: "Mayor Adams seeks to suspend right-to-shelter during migrant surge", kind: "event" },
    { year: 2024, event: "March stipulation: 30/60-day stays for adult migrants under State of Emergency; underlying right preserved", actor: "Justice Gerald Lebovits", kind: "modification" }
  ],
  "jose-p-doe": [
    { year: 1979, event: "Class action filed under predecessor to IDEA", kind: "event" },
    { year: 1980, event: "Judgment entered: timelines for special-ed evaluations and placements", kind: "entered" },
    { year: 1983, event: "Modified order on compliance and reporting", actor: "Judge Eugene Nickerson", kind: "modification" },
    { year: 2003, event: "L.V. v. NYC DOE filed to enforce IDEA hearing-order implementation", kind: "event" },
    { year: 2020, event: "J.S.M. v. NYC DOE filed targeting due-process hearing backlog", kind: "event" }
  ],
  "lv-doe-hearing-orders": [
    { year: 2003, event: "Class action filed by Advocates for Children", kind: "event" },
    { year: 2007, event: "Initial settlement entered: 35-day implementation default", kind: "entered" },
    { year: 2023, event: "Judge Loretta Preska enters 51-step reform order with Special Master oversight (July)", kind: "modification" },
    { year: 2025, event: "Monitor report: only 21 of 51 reforms implemented (July)", kind: "event" },
    { year: 2026, event: "Modified enforcement / contempt proceedings anticipated", kind: "event" }
  ],
  "vulcan-fdny": [
    { year: 2007, event: "DOJ files Title VII action; Vulcan Society intervenes", kind: "event" },
    { year: 2009, event: "Liability ruling: FDNY entrance exam had disparate impact and was discriminatory", actor: "Judge Nicholas Garaufis", kind: "event" },
    { year: 2014, event: "Comprehensive injunctive-relief decree entered; new exam approved", kind: "entered" },
    { year: 2015, event: "$99M monetary relief consent decree approved; court monitor appointed", kind: "modification" },
    { year: 2025, event: "Most diverse academy classes in FDNY history (17% Black, 24% Latino) under decree", kind: "event" }
  ],
  "gulino-doe": [
    { year: 1996, event: "Class action filed challenging NYC teacher licensing exams as discriminatory", kind: "event" },
    { year: 2006, event: "2d Circuit liability ruling: LAST exam violated Title VII", kind: "event" },
    { year: 2015, event: "Remedy proceedings begin under Judge Kimba Wood with Special Master", kind: "entered" },
    { year: 2023, event: "Individualized damages awards continue; aggregate liability in hundreds of millions", kind: "event" },
    { year: 2025, event: "Court orders issued as recently as October 2025; total exposure near $1.8B", kind: "event" }
  ],
  "willowbrook-opwdd": [
    { year: 1972, event: "Class action filed after Geraldo Rivera exposé of Willowbrook State School", kind: "event" },
    { year: 1975, event: "Willowbrook Consent Judgment entered: community placement and services", kind: "entered" },
    { year: 1987, event: "Willowbrook State School closes", kind: "event" },
    { year: 1993, event: "Permanent Injunction replaces 1975 decree", kind: "modification" },
    { year: 2025, event: "50th anniversary observed; Permanent Injunction remains in force", kind: "event" }
  ],
  "marisol-acs": [
    { year: 1995, event: "Class action filed after Elisa Izquierdo's death", kind: "event" },
    { year: 1996, event: "ACS established as independent agency in response", kind: "event" },
    { year: 1998, event: "Settlement reached creating Advisory Panel of outside experts", kind: "entered" },
    { year: 1999, event: "Settlement approved by court", kind: "modification" },
    { year: 2001, event: "State-side jurisdiction terminated", kind: "event" },
    { year: 2018, event: "Court relinquishes jurisdiction over City settlement (Aug 6)", kind: "terminated" }
  ],
  "people-ny-nypd-protests": [
    { year: 2020, event: "George Floyd protests; NYPD response prompts multiple suits", kind: "event" },
    { year: 2021, event: "NY AG Letitia James files action under NYPD's pattern of protest response", kind: "event" },
    { year: 2023, event: "Joint settlement reached with AG, NYCLU, Legal Aid (Sep)", kind: "entered" },
    { year: 2024, event: "Court authorizes reforms over PBA opposition (Feb)", actor: "Judge Colleen McMahon", kind: "modification" },
    { year: 2025, event: "Implementation continues under external oversight committee", kind: "event" }
  ],
  "sow-nypd-protests": [
    { year: 2020, event: "BLM protesters arrested in mass kettlings May 28–June 4", kind: "event" },
    { year: 2021, event: "Class action filed by National Lawyers Guild", kind: "event" },
    { year: 2023, event: "$13M settlement announced (July)", kind: "entered" },
    { year: 2024, event: "Court grants final approval (Feb 22)", actor: "Judge Colleen McMahon", kind: "modification" }
  ],
  "mccain-v-koch": [
    { year: 1983, event: "Class action filed on behalf of homeless families with children", kind: "event" },
    { year: 1986, event: "Appellate Division affirms right to family shelter", kind: "entered" },
    { year: 2008, event: "Boston successor agreement replaces McCain framework", kind: "modification" },
    { year: 2008, event: "Court closes McCain after 25 years", kind: "terminated" }
  ],
  "aspira-consent-decree": [
    { year: 1972, event: "Class action filed by ASPIRA for bilingual education", kind: "event" },
    { year: 1974, event: "Consent decree signed (Aug 29): first systemwide bilingual program in US", actor: "Judge Marvin Frankel", kind: "entered" },
    { year: 2018, event: "U.S. v. NYC DOE ELL compliance agreement updates obligations", kind: "modification" }
  ],
  "goldberg-v-kelly": [
    { year: 1968, event: "Suit filed by NYC welfare recipients", actor: "Mobilization for Youth Legal Services", kind: "event" },
    { year: 1970, event: "Supreme Court decision (Mar 23): pre-termination hearings required", actor: "Justice Brennan, 5-3", kind: "entered" }
  ],
  "penn-central-v-nyc": [
    { year: 1969, event: "Landmarks Commission denies Grand Central office-tower proposal", kind: "event" },
    { year: 1978, event: "Supreme Court decision: landmark designation not a taking; three-factor test announced", actor: "Justice Brennan, 6-3", kind: "entered" }
  ],
  "nysrpa-v-bruen": [
    { year: 1913, event: "Sullivan Law enacted establishing NY's 'proper cause' concealed-carry standard", kind: "event" },
    { year: 2018, event: "NYSRPA files suit challenging proper-cause requirement", kind: "event" },
    { year: 2022, event: "Supreme Court strikes down proper-cause requirement; text-history-tradition test announced", actor: "Justice Thomas, 6-3", kind: "entered" },
    { year: 2022, event: "NY enacts Concealed Carry Improvement Act creating 'sensitive locations'", kind: "modification" }
  ],
  "payton-v-new-york": [
    { year: 1970, event: "NYPD enters Bronx and Queens apartments without warrants", kind: "event" },
    { year: 1980, event: "Supreme Court decision: warrantless home arrest unconstitutional absent exigency", actor: "Justice Stevens, 6-3", kind: "entered" }
  ],
  "bd-of-estimate-v-morris": [
    { year: 1981, event: "Brooklyn voters file suit against Board of Estimate structure", kind: "event" },
    { year: 1989, event: "Supreme Court decision: Board violates one person, one vote", actor: "Justice White, 9-0", kind: "entered" },
    { year: 1989, event: "NYC Charter revised; Board of Estimate abolished; modern Council–Mayor balance established", kind: "modification" }
  ],
  "cidny-mta-subway-accessibility": [
    { year: 2017, event: "State court class action filed by CIDNY", kind: "event" },
    { year: 2019, event: "Federal companion case De La Rosa filed", kind: "event" },
    { year: 2022, event: "Settlement announced (June): 95% accessibility by 2055; 14.69% capital-plan set-aside", kind: "entered" },
    { year: 2023, event: "Federal court grants final approval (Apr 24)", actor: "Judge Edgardo Ramos", kind: "modification" },
    { year: 2025, event: "2025–2029 MTA Capital Plan is first full plan under 14.69% set-aside", kind: "event" }
  ],
  "us-v-nyc-dep-cso": [
    { year: 2005, event: "Original CSO Consent Order entered with NYSDEC", kind: "entered" },
    { year: 2012, event: "Order modified to incorporate waterbody-specific LTCPs", kind: "modification" },
    { year: 2018, event: "Order modified to add green infrastructure targets", kind: "modification" },
    { year: 2024, event: "Order modified to add Bronx River and Coney Island Creek obligations", kind: "modification" }
  ],
  "ligon-nypd": [
    {"year": 2012, "event": "Class action filed challenging NYPD Trespass Affidavit Program stops in and around private Bronx apartment buildings", "kind": "event"},
    {"year": 2013, "event": "Preliminary injunction granted finding Fourth Amendment violations in TAP stops", "actor": "Judge Shira Scheindlin", "kind": "modification"},
    {"year": 2017, "event": "Settlement entered jointly with Floyd remedial process; supervised by joint federal monitor", "kind": "entered"},
    {"year": 2022, "event": "Mylan L. Denerstein succeeds Peter Zimroth as joint Floyd/Ligon monitor", "kind": "monitor"},
    {"year": 2024, "event": "Joint monitor reports continued undocumented and unconstitutional trespass stops", "kind": "event"}
  ],
  "davis-nypd-nycha": [
    {"year": 2010, "event": "Class action filed by LDF and Legal Aid challenging NYPD vertical-patrol trespass stops and arrests in NYCHA buildings", "kind": "event"},
    {"year": 2015, "event": "Settlement entered revising NYPD Patrol Guide and NYCHA trespass rules; documentation and training reforms imposed", "kind": "entered"},
    {"year": 2019, "event": "Court approves updated public-housing training curriculum", "kind": "modification"},
    {"year": 2024, "event": "Plaintiffs' counsel continue to flag noncompliance in joint Floyd monitor reports", "kind": "event"}
  ],
  "raza-nypd": [
    {"year": 2013, "event": "ACLU/NYCLU/CLEAR file challenge to NYPD blanket surveillance of Muslim New Yorkers", "kind": "event"},
    {"year": 2017, "event": "Joint Handschu/Raza settlement entered modifying Handschu Guidelines, adding equal-protection bar and Civilian Representative role", "kind": "entered"},
    {"year": 2017, "event": "Stephen Robinson appointed first Civilian Representative", "kind": "monitor"},
    {"year": 2023, "event": "Muhammad U. Faridi succeeds Robinson as Civilian Representative", "kind": "monitor"},
    {"year": 2026, "event": "Seventh Annual Report of the Civilian Representative filed", "kind": "event"}
  ],
  "jsm-doe-due-process": [
    {"year": 2020, "event": "NYLAG files class action over chronic backlog in DOE/NYSED IDEA impartial hearings", "kind": "event"},
    {"year": 2024, "event": "Preliminary settlement negotiated", "kind": "event"},
    {"year": 2025, "event": "Final settlement approval granted (Apr. 22) committing DOE to systemic reforms to meet IDEA due-process timelines", "kind": "entered"},
    {"year": 2026, "event": "Implementation phase underway", "kind": "event"}
  ],
  "ng-doe-transition": [
    {"year": 2014, "event": "Class action filed challenging DOE failure to provide adequate IDEA transition planning for special-education students 14 and older", "kind": "event"},
    {"year": 2020, "event": "Class certification and merits litigation proceed", "kind": "event"},
    {"year": 2026, "event": "Settlement/consent posture remains in flux; further motion practice expected", "kind": "event"}
  ],
  "eldredge-shelter-women": [
    {"year": 1982, "event": "Class action filed seeking to extend Callahan right to shelter to single homeless women", "kind": "event"},
    {"year": 1983, "event": "Consent decree entered requiring parity in women's shelter standards", "kind": "entered"},
    {"year": 1983, "event": "Appellate Division affirms application of Callahan standards to women's shelters", "kind": "modification"},
    {"year": 2024, "event": "Modifications run through the 2024 Callahan stipulation framework", "kind": "modification"}
  ],
  "boston-mccain-shelter-families": [
    {"year": 1983, "event": "McCain v. Koch filed seeking right to shelter for homeless families with children", "kind": "event"},
    {"year": 2008, "event": "Boston v. City of New York 'final, permanent, enforceable' settlement entered superseding 25 years of McCain litigation", "kind": "entered"},
    {"year": 2024, "event": "Callahan modification expressly carves out families with children, preserving Boston framework", "kind": "event"}
  ],
  "reynolds-hra": [
    {"year": 1998, "event": "Class action filed challenging HRA Job Center practices deterring SNAP, Medicaid, and cash-assistance access", "kind": "event"},
    {"year": 2001, "event": "Bench trial held", "actor": "Judge William Pauley III", "kind": "event"},
    {"year": 2005, "event": "Declaratory and injunctive relief entered governing intake, expedited SNAP, and emergency-assistance access", "kind": "entered"},
    {"year": 2025, "event": "Advocates continue to flag SNAP backlogs at HRA amid staffing shortfalls", "kind": "event"}
  ],
  "latino-officers-nypd": [
    {"year": 1999, "event": "Class action filed by Black and Latino NYPD officers alleging hostile work environment, disparate discipline, and retaliation", "kind": "event"},
    {"year": 2004, "event": "Settlement approved (Sept.) with $20M damages and structural reforms to NYPD discipline and EEO systems, including disciplinary-outcome audit unit", "actor": "Judge Lewis Kaplan", "kind": "entered"},
    {"year": 2020, "event": "Periodic disputes over compliance with audit and discipline-equity provisions continue", "kind": "event"}
  ],
  "doj-adult-homes-olmstead": [
    {"year": 2013, "event": "DOJ files ADA/Olmstead action over segregation of people with mental illness in NYC adult homes", "kind": "event"},
    {"year": 2014, "event": "Settlement Agreement entered requiring State to offer supported housing to thousands of adult-home residents; independent reviewer named", "kind": "entered"},
    {"year": 2014, "event": "Independent reviewer appointed under settlement", "kind": "monitor"},
    {"year": 2024, "event": "Supported-housing transitions continue under reviewer oversight", "kind": "event"}
  ],
  "payne-nypd-protests": [
    {"year": 2020, "event": "Class action filed over NYPD 2020 protest response; consolidated track with People of NY v. NYC", "kind": "event"},
    {"year": 2024, "event": "Joint settlement approved establishing four-tier protest response and structural reforms; over $500,000 secured for individual clients", "kind": "entered"},
    {"year": 2025, "event": "Implementation overseen by same external committee as People of NY action", "kind": "monitor"}
  ],
  "ny-ny-supportive-housing": [
    {"year": 1990, "event": "NY/NY I City-State agreement signed funding supportive housing for formerly homeless people with mental illness", "kind": "entered"},
    {"year": 1999, "event": "NY/NY II expansion agreement signed", "kind": "modification"},
    {"year": 2005, "event": "NY/NY III agreement signed bringing total commitments past 14,000 units", "kind": "modification"},
    {"year": 2015, "event": "NYC 15/15 city-only successor committing to 15,000 additional supportive units", "kind": "modification"},
    {"year": 2016, "event": "State launches Empire State Supportive Housing Initiative (ESSHI), funding 26,000+ statewide units to date", "kind": "modification"},
    {"year": 2024, "event": "NY/NY III commitments largely completed; obligations now run through NYC 15/15 and ESSHI", "kind": "event"}
  ],
  "united-spinal-nyc-boe-polling": [
    {"year": 2010, "event": "ADA and Rehabilitation Act class action filed over inaccessibility of NYC polling places", "kind": "event"},
    {"year": 2012, "event": "SDNY liability ruling finds widespread accessibility violations", "actor": "Judge Deborah A. Batts", "kind": "event"},
    {"year": 2014, "event": "Second Circuit affirms liability; remedial plan ordered requiring ADA coordinators, accessibility consultant, and site-by-site remediation", "kind": "entered"},
    {"year": 2014, "event": "Independent accessibility consultant retained under court order", "kind": "monitor"},
    {"year": 2024, "event": "Advocates continue to flag specific site failures each election cycle", "kind": "event"}
  ],
  "eason-boe-accessible-registration": [
    {"year": 2016, "event": "ADA and Rehabilitation Act suit filed over inaccessible online voter registration and absentee ballots", "kind": "event"},
    {"year": 2019, "event": "Settlement entered (Feb.) requiring NYS BOE and DMV to make voter-registration websites screen-reader accessible by 2021", "kind": "entered"},
    {"year": 2021, "event": "Follow-on agreement requires statewide RAVBM deployment by June 2022", "kind": "modification"},
    {"year": 2022, "event": "Remote accessible vote-by-mail system used in general election", "kind": "event"},
    {"year": 2025, "event": "Minor compliance disputes continue but framework operative", "kind": "event"}
  ],
  "nysed-cap-nyc-doe": [
    {"year": 2019, "event": "NYSED places NYC DOE under written Compliance Assurance Plan (May) after 13 years of IDEA disability-subgroup failure", "kind": "entered"},
    {"year": 2020, "event": "Part 154 corrective action plans issued for English Language Learners", "kind": "modification"},
    {"year": 2024, "event": "NYC Comptroller 'Course Correction' report documents continuing gaps", "kind": "event"},
    {"year": 2026, "event": "NYC DOE remains under NYSED scrutiny; successor audits ongoing", "kind": "event"}
  ],
  "port-authority-path-grove-street": [
    {"year": 2014, "event": "ADA suit filed against Port Authority over 2005 Grove Street PATH renovation without elevators", "kind": "event"},
    {"year": 2021, "event": "Settlement entered requiring southwest-entrance elevator and west-side vertical platform lift — first enforceable PATH ADA decree in decades", "kind": "entered"},
    {"year": 2023, "event": "NYS OSC audit flags PA Bus Terminal and other gates as inaccessible", "kind": "event"},
    {"year": 2025, "event": "Construction of Grove Street elevator and lift continues", "kind": "event"}
  ],
  "newtown-creek-superfund": [
    {"year": 2010, "event": "EPA lists Newtown Creek on Superfund NPL; NYC named among six PRPs", "kind": "event"},
    {"year": 2011, "event": "Administrative Order on Consent entered requiring NYC and co-PRPs to fund and conduct the RI/FS", "kind": "entered"},
    {"year": 2024, "event": "EPA releases Proposed Plan for lower 3.5 miles of creek (late 2024)", "kind": "event"},
    {"year": 2026, "event": "Record of Decision expected; remedial-design consent decree to be negotiated with NYC", "kind": "event"}
  ],
  "gowanus-canal-superfund": [
    {"year": 2010, "event": "EPA lists Gowanus Canal on Superfund NPL; NYC identified as PRP", "kind": "event"},
    {"year": 2013, "event": "EPA Record of Decision issued (Sept. 27); Administrative Settlement Agreement binds NYC to design and build Head-End and Owl's Head/4th Street CSO retention tanks", "kind": "entered"},
    {"year": 2024, "event": "Dredging of upper canal completed", "kind": "event"},
    {"year": 2028, "event": "Head-End CSO tank construction targeted for completion", "kind": "event"},
    {"year": 2030, "event": "Owl's Head/4th Street CSO tank construction targeted for completion", "kind": "event"}
  ],
  "nyc-watershed-fad": [
    {"year": 1993, "event": "EPA notifies NYC it must either filter Catskill/Delaware water or adopt watershed-protection program", "kind": "event"},
    {"year": 1997, "event": "Watershed Memorandum of Agreement signed and first Filtration Avoidance Determination issued under Safe Drinking Water Act", "kind": "entered"},
    {"year": 2017, "event": "FAD revised", "kind": "modification"},
    {"year": 2023, "event": "EPA and NYSDOH issue mid-term FAD revision tightening turbidity reporting after Ashokan Reservoir releases controversy", "kind": "modification"},
    {"year": 2027, "event": "Next full FAD review scheduled", "kind": "event"}
  ],
  "us-v-nyc-boe-chinese": [
    {"year": 2013, "event": "DOJ sues NYC BOE under Section 203 over inadequate Chinese-language assistance in Manhattan, Queens, and Brooklyn", "kind": "event"},
    {"year": 2013, "event": "Memorandum of agreement entered requiring bilingual workers, translated materials, and DOJ observer access", "kind": "entered"},
    {"year": 2013, "event": "DOJ Voting Section observers begin coverage", "kind": "monitor"},
    {"year": 2024, "event": "DOJ observers cover general election; AALDEF documents persistent poll-site gaps", "kind": "event"}
  ],
  "us-v-nyc-boe-bengali": [
    {"year": 2011, "event": "Census Bureau designates Queens County for Bengali-language coverage under Section 203", "kind": "event"},
    {"year": 2017, "event": "MOA entered (Mar. 7) requiring Bengali ballots, signage, and bilingual poll workers in covered Queens EDs", "kind": "entered"},
    {"year": 2017, "event": "DOJ Voting Section observers begin coverage", "kind": "monitor"},
    {"year": 2025, "event": "AALDEF and Chhaya CDC document continued interpreter-staffing shortfalls at South Asian-heavy sites", "kind": "event"}
  ],
  "cchr-douglas-elliman-soi": [
    {"year": 2020, "event": "CCHR multi-year testing investigation initiated into Douglas Elliman SOI practices", "kind": "event"},
    {"year": 2022, "event": "Conciliation agreement entered requiring system-wide subsidy acceptance, $120,000 penalty, training, and 3-year compliance reporting", "kind": "entered"},
    {"year": 2022, "event": "CCHR Law Enforcement Bureau begins 3-year compliance term", "kind": "monitor"},
    {"year": 2024, "event": "Agreement cited as model in two large management-firm settlements", "kind": "event"},
    {"year": 2025, "event": "Compliance phase concludes", "kind": "event"}
  ],
  "us-v-nyc-dot-aps": [
    {"year": 2012, "event": "DOJ opens Title II ADA investigation of NYC DOT signalized intersections", "kind": "event"},
    {"year": 2013, "event": "Settlement Agreement entered requiring APS installation at signalized intersections citywide", "kind": "entered"},
    {"year": 2013, "event": "DOJ Disability Rights Section monitoring begins", "kind": "monitor"},
    {"year": 2021, "event": "Largely superseded operationally by ACB v. NYC consent decree mandating full APS coverage by 2031", "kind": "modification"}
  ],
  "acb-v-nyc-aps": [
    {"year": 2018, "event": "ACB-NY files Title II ADA suit challenging absence of Accessible Pedestrian Signals at NYC intersections", "kind": "event"},
    {"year": 2020, "event": "Liability ruling: DOT's lack of APS violates Title II of the ADA", "actor": "Judge Paul A. Engelmayer", "kind": "event"},
    {"year": 2021, "event": "Consent decree entered requiring APS at all ~13,200 signalized intersections by 2031; court-appointed monitor named", "kind": "entered"},
    {"year": 2021, "event": "Court-appointed monitor and DRA compliance counsel begin oversight", "kind": "monitor"},
    {"year": 2025, "event": "About 5,000 intersections equipped by mid-year; plaintiffs raise maintenance-backlog concerns", "kind": "event"}
  ],
  "nypd-columbia-cuny-protest-2024": [
    {"year": 2024, "event": "Class action filed after April-May NYPD raids at Columbia Hamilton Hall and CUNY City College Gaza encampments", "kind": "event"},
    {"year": 2025, "event": "Class settlement reached adding binding limits on batons, sound cannons, and mass-arrest processing tied to Sow/Payne frameworks", "actor": "Judge Dale E. Ho", "kind": "entered"},
    {"year": 2025, "event": "Preliminary approval entered late 2025; coordinated with Sow monitor team", "kind": "monitor"},
    {"year": 2026, "event": "Final fairness hearing scheduled early 2026", "kind": "event"}
  ],
  "nyc-doe-ell-compliance": [
    {"year": 2014, "event": "U.S. ED Office for Civil Rights opens investigation of NYC DOE ELL services", "kind": "event"},
    {"year": 2018, "event": "DOJ MOU/compliance agreement entered requiring ELL identification, programming, and exit protocols under Title VI and EEOA", "kind": "entered"},
    {"year": 2018, "event": "OCR begins ongoing compliance monitoring", "kind": "monitor"},
    {"year": 2024, "event": "OCR issues corrective-action letter flagging deficiencies in newcomer-student programming amid asylum-seeker enrollment surge", "kind": "modification"}
  ],
  "nunez-rikers-receivership": [
    {"year": 2024, "event": "Judge Swain finds City in contempt of 18 Nunez consent-judgment provisions (Nov.)", "actor": "Judge Laura Taylor Swain", "kind": "contempt"},
    {"year": 2025, "event": "Court orders appointment of outside Remediation Manager with broad authority over DOC operations (May)", "kind": "contempt"},
    {"year": 2025, "event": "December order details Remediation Manager's sweeping powers", "kind": "event"},
    {"year": 2026, "event": "Nicholas Deml named Remediation Manager (Jan. 27)", "kind": "monitor"},
    {"year": 2026, "event": "Implementation orders and scope litigation expected to continue through 2026-2027", "kind": "event"}
  ],
  "dw-doe-evaluations": [
    {"year": 2023, "event": "Class action filed alleging DOE systematically fails to provide timely IDEA initial and reevaluation assessments", "kind": "event"},
    {"year": 2025, "event": "Motion to dismiss denied in substantial part (May 27)", "actor": "Judge Edgardo Ramos", "kind": "event"},
    {"year": 2026, "event": "Class certification and merits proceedings expected", "kind": "event"}
  ],
  "lv-doe-enforcement": [
    {"year": 2023, "event": "Judge Preska's order imposes 51 reforms to fix DOE's hearing-order implementation system", "actor": "Judge Loretta Preska", "kind": "event"},
    {"year": 2023, "event": "Special Master appointed to oversee implementation", "kind": "monitor"},
    {"year": 2025, "event": "July monitor report finds DOE has implemented only 21 of 51 reforms", "kind": "event"},
    {"year": 2026, "event": "Further enforcement orders, potential contempt or modified-decree proceedings anticipated", "kind": "event"}
  ],
  "acs-coercive-home-searches": [
    {"year": 2024, "event": "Gould class action filed (Feb. 20) alleging widespread warrantless, coercive ACS home searches violate the Fourth Amendment", "kind": "event"},
    {"year": 2025, "event": "Bronx Defenders/Arnold & Porter parallel racial-discrimination and newborn-separation suits filed October", "kind": "event"},
    {"year": 2026, "event": "Discovery proceeding; possible consolidation of parallel actions", "kind": "event"}
  ],
  "nypd-gang-database": [
    {"year": 2025, "event": "Federal class action filed (Apr. 30) alleging NYPD Criminal Group Database violates First, Fourth, and Fourteenth Amendments and city law", "kind": "event"},
    {"year": 2025, "event": "City's motion to dismiss denied (Dec.); class certification also denied at same time, limiting case to three named plaintiffs", "actor": "Judge Brian M. Cogan", "kind": "event"},
    {"year": 2026, "event": "Discovery continues; renewed class-certification motion expected", "kind": "event"}
  ],
  "nypd-vehicle-stops": [
    {"year": 2026, "event": "NAACP NY State Conference files class action (Jan. 26) over NYPD vehicle-search practices targeting Black and Latino drivers", "kind": "event"},
    {"year": 2026, "event": "Motion-to-dismiss briefing expected", "kind": "event"}
  ],
  "doc-phone-surveillance": [
    {"year": 2024, "event": "Class action filed (Apr. 15) alleging DOC recorded and shared confidential attorney-client phone calls with prosecutors and mass-surveilled all jail calls", "kind": "event"},
    {"year": 2025, "event": "City Council Intro proposing warrant requirement for jail calls advances in coordination with litigation", "kind": "event"},
    {"year": 2026, "event": "Sixth Amendment and statutory claims continue in motion practice", "kind": "event"}
  ],
  "competency-restoration-delays": [
    {"year": 2025, "event": "Class action filed (Aug. 13) against NYS OMH, NYC DOHMH, and H+H over systemic delays in transferring Rikers detainees found unfit to stand trial; median waits hit 81 days", "kind": "event"},
    {"year": 2026, "event": "Initial motion practice expected", "kind": "event"}
  ],
  "encampment-sweeps": [
    {"year": 2024, "event": "Federal civil rights class action filed (Oct. 29) alleging encampment-sweep program violates Fourth Amendment by destroying property without notice or process", "kind": "event"},
    {"year": 2026, "event": "Salience heightened after Mamdani administration restarts sweeps (Feb.)", "kind": "event"},
    {"year": 2026, "event": "Preliminary-injunction and class-certification motions expected", "kind": "event"}
  ],
  "nypd-domain-awareness": [
    {"year": 2025, "event": "Federal civil rights suit filed (Oct. 27) alleging NYPD Domain Awareness System conducts unconstitutional mass surveillance including cameras pointed into private residences", "kind": "event"},
    {"year": 2025, "event": "Parallel FOIL litigation produces 2,700 documents (Nov.) showing facial-recognition use against protesters", "kind": "event"},
    {"year": 2026, "event": "Motion practice expected on standing and merits", "kind": "event"}
  ],
  "callahan-migrant-transfers": [
    {"year": 2024, "event": "March Callahan stipulation gives NYC flexibility on adult migrant shelter stays", "kind": "event"},
    {"year": 2024, "event": "Legal Aid files first wave of individual enforcement actions over abrupt hotel-shelter transfers alleged to violate consent decree", "kind": "event"},
    {"year": 2025, "event": "At least 14 individual enforcement matters pending in NY County Supreme Court", "kind": "event"},
    {"year": 2026, "event": "Trial or negotiated resolution of test cases expected", "kind": "event"}
  ],
  "council-v-adams-rikers-ice": [
    {"year": 2025, "event": "NYC Council files state-court action (Apr. 15) challenging Mastro executive order inviting ICE office on Rikers as violating 2014 sanctuary laws", "kind": "event"},
    {"year": 2025, "event": "Final ruling blocks the executive order (Sept. 8)", "actor": "Justice Mary V. Rosado", "kind": "event"},
    {"year": 2026, "event": "Possible appeal and continued enforcement litigation", "kind": "event"}
  ],
  "cidny-curb-ramps": [
    {"year": 2014, "event": "ADA class action filed over noncompliant NYC pedestrian ramps", "kind": "event"},
    {"year": 2019, "event": "Settlement entered requiring installation or upgrade of ~108,600 noncompliant pedestrian ramps by 2034 under outside monitor", "kind": "entered"},
    {"year": 2019, "event": "Court-appointed independent monitor begins oversight", "kind": "monitor"},
    {"year": 2026, "event": "Enforcement motions and decree modifications anticipated as midpoint deadlines approach", "kind": "event"}
  ],
  "mg-v-cuomo": [
    {"year": 2019, "event": "Class action filed alleging NYS DOCCS and OMH violate ADA, Rehabilitation Act, and Due Process by failing to provide community placements for parole-eligible people with serious mental illness", "kind": "event"},
    {"year": 2023, "event": "Active in S.D.N.Y.; motion practice ongoing", "kind": "event"},
    {"year": 2026, "event": "Class certification and merits adjudication anticipated", "kind": "event"}
  ],
  "ab-v-ocfs-youth-solitary": [
    {"year": 2026, "event": "Putative federal class action filed (Jan.) alleging NYS OCFS holds children in solitary confinement at secure-placement facilities for up to 24 hours a day, sometimes for weeks, without working toilets or schooling", "kind": "event"},
    {"year": 2026, "event": "OCFS denies allegations; initial motion practice expected", "kind": "event"}
  ],
  "doccs-marcy-federal-review": [
    {"year": 2024, "event": "Robert Brooks fatally beaten by Marcy Correctional Facility officers while handcuffed (Dec. 9); FBI Albany and DOJ open review", "kind": "event"},
    {"year": 2025, "event": "State grand jury indicts nearly a dozen DOCCS officers on murder and related charges (Feb.); Governor Hochul orders outside review of DOCCS culture", "kind": "event"},
    {"year": 2026, "event": "Federal review remains open; state criminal prosecutions of indicted officers ongoing", "kind": "event"}
  ],
  "wilder-v-bernstein": [
    {"year": 1973, "event": "Class action filed alleging City's reliance on religiously affiliated foster care agencies racially segregated foster children", "kind": "event"},
    {"year": 1984, "event": "Wilder Decree signed imposing randomized referral system to allocate children without regard to race or religion", "kind": "event"},
    {"year": 1986, "event": "Decree judicially approved; Special Child Welfare Advisory Panel established", "kind": "entered"},
    {"year": 1988, "event": "Second Circuit affirms the decree", "kind": "modification"},
    {"year": 1999, "event": "Court relinquishes jurisdiction; obligations folded into ACS quality-assurance functions", "kind": "terminated"}
  ],
  "sheppard-v-phoenix": [
    {"year": 1991, "event": "Class action filed challenging use of force and conditions in Rikers Central Punitive Segregation Unit", "kind": "event"},
    {"year": 1995, "event": "Consent decree entered imposing limits on staff use of force and requiring documentation, review, staffing, and supervision reforms", "kind": "entered"},
    {"year": 1995, "event": "Legal Aid Society monitors compliance under court-supervised reporting", "kind": "monitor"},
    {"year": 2002, "event": "Court relinquishes jurisdiction; framework later folded into DOC-wide use-of-force directive and Nunez monitorship", "kind": "terminated"}
  ],
  "handschu-1985": [
    {"year": 1971, "event": "Class action filed by political activists challenging NYPD 'Red Squad' surveillance", "kind": "event"},
    {"year": 1985, "event": "Original Handschu Consent Decree entered; three-member Handschu Authority created", "kind": "entered"},
    {"year": 1985, "event": "Handschu Authority begins oversight of Intelligence Division investigations", "kind": "monitor"},
    {"year": 2003, "event": "Modified Handschu Guidelines relax post-9/11 restrictions, superseding 1985 regime", "kind": "terminated"}
  ],
  "forts-v-ward": [
    {"year": 1975, "event": "Class action filed by incarcerated women over privacy violations from male-officer viewing in sleeping and bathing areas", "kind": "event"},
    {"year": 1978, "event": "District court enters decree restricting male-officer assignments", "kind": "entered"},
    {"year": 1980, "event": "Second Circuit ruling (621 F.2d 1210) balances privacy rights against officers' employment rights", "kind": "modification"},
    {"year": 2003, "event": "Prison Rape Elimination Act standards codify much of the Forts framework", "kind": "event"}
  ],
  "sharif-v-nysed": [
    {"year": 1988, "event": "Title IX and Equal Protection challenge filed to NYS exclusive reliance on SAT scores for Regents/Empire State Scholarships", "kind": "event"},
    {"year": 1989, "event": "Court enjoins SAT-only system as gender discrimination (Feb.); remedy adopts weighted GPA + Regents formula", "actor": "Judge John Walker", "kind": "entered"},
    {"year": 1989, "event": "NYS implements weighted scholarship formula; case effectively concluded", "kind": "terminated"}
  ],
  "klostermann-v-cuomo": [
    {"year": 1982, "event": "Action filed on behalf of homeless mentally ill former state psychiatric patients seeking community placement and discharge planning", "kind": "event"},
    {"year": 1984, "event": "NY Court of Appeals (61 N.Y.2d 525) holds courts have jurisdiction to enforce these rights, rejecting nonjusticiability defense", "kind": "entered"},
    {"year": 1990, "event": "First NY/NY supportive-housing agreement signed in part to satisfy Klostermann obligations", "kind": "modification"}
  ],
  "rothenberg-v-daus": [
    {"year": 2008, "event": "Federal class action filed challenging TLC automatic license revocations based on off-duty conduct without notice or hearing", "kind": "event"},
    {"year": 2013, "event": "Settlement entered requiring pre-revocation due process and limiting summary revocation to demonstrated passenger-safety risk", "kind": "entered"},
    {"year": 2014, "event": "TLC rules amended to route fitness hearings through OATH with notice, evidence, and appeal", "kind": "modification"},
    {"year": 2015, "event": "Court relinquishes jurisdiction", "kind": "terminated"}
  ],
  "taxis-for-all-v-tlc": [
    {"year": 2011, "event": "ADA class action filed seeking accessible yellow taxi service in NYC", "kind": "event"},
    {"year": 2014, "event": "Settlement entered requiring 50% wheelchair-accessible yellow fleet by 2020 and creation of Accessible Dispatch system", "kind": "entered"},
    {"year": 2014, "event": "Disability Rights Advocates begin court-supervised compliance reporting", "kind": "monitor"},
    {"year": 2020, "event": "50% accessibility milestone reached", "kind": "event"},
    {"year": 2024, "event": "Court jurisdiction terminated; medallion-accessibility and FHV frameworks remain in TLC rules", "kind": "terminated"}
  ],
  "us-v-boe-nvra": [
    {"year": 1993, "event": "DOJ files enforcement action to compel NY compliance with National Voter Registration Act ('Motor Voter')", "kind": "event"},
    {"year": 1995, "event": "Consent decree entered building NVRA agency-registration infrastructure across DMV, public-assistance, and disability-services offices", "kind": "entered"},
    {"year": 1995, "event": "DOJ Voting Section begins oversight of state-agency NVRA compliance", "kind": "monitor"},
    {"year": 2000, "event": "Court relinquishes jurisdiction; HRA SNAP and cash-assistance recertification voter-registration practices remain in place", "kind": "terminated"}
  ],
  "bcid-nyc-emergency-planning": [
    {"year": 2011, "event": "Class action filed after Hurricane Irene exposed gaps in NYC emergency planning for people with disabilities", "kind": "event"},
    {"year": 2013, "event": "Court rules City violated ADA, Rehabilitation Act, and NYC Human Rights Law (Nov.)", "actor": "Judge Jesse M. Furman", "kind": "event"},
    {"year": 2014, "event": "Comprehensive remedial settlement reached (Sept. 30)", "kind": "entered"},
    {"year": 2019, "event": "Court jurisdiction terminated by settlement terms (May); obligations remain embedded in NYC Emergency Management policies", "kind": "terminated"}
  ],
  "peoples-v-annucci": [
    {"year": 2011, "event": "Class action filed challenging DOCCS use of SHU as default discipline", "kind": "event"},
    {"year": 2016, "event": "Settlement entered (formalizing December 2015 agreement) setting sentencing guidelines, eliminating solitary for certain populations, and committing DOCCS to alternative units", "actor": "Judge Shira A. Scheindlin", "kind": "entered"},
    {"year": 2016, "event": "Court-supervised reporting begins", "kind": "monitor"},
    {"year": 2021, "event": "HALT Solitary Confinement Act largely supersedes settlement obligations", "kind": "modification"},
    {"year": 2021, "event": "Settlement obligations expire in stages; Fields v. Annucci (filed 2023) now drives enforcement", "kind": "terminated"}
  ],
  "hurrell-harring-indigent-defense": [
    {"year": 2007, "event": "State constitutional challenge filed to NY county-by-county public defense system", "kind": "event"},
    {"year": 2014, "event": "Settlement entered (Oct.) committing State to fund counsel at arraignment, set caseload caps, and ensure quality standards in five named counties", "actor": "Justice Gerald W. Connolly", "kind": "entered"},
    {"year": 2014, "event": "NYS Office of Indigent Legal Services oversees implementation", "kind": "monitor"},
    {"year": 2017, "event": "NY enacts Executive Law § 832-a extending reforms statewide", "kind": "modification"},
    {"year": 2023, "event": "Statewide implementation via ILS continues to underwrite NYC indigent defense; original obligations largely fulfilled", "kind": "terminated"}
  ],
  "us-v-nyc-boe-korean-2008": [
    {"year": 2008, "event": "DOJ sues NYC BOE over Section 203 violations affecting Korean and Chinese voters after repeated AALDEF poll-monitoring findings", "kind": "event"},
    {"year": 2008, "event": "Consent decree entered requiring translated materials, bilingual workers, and DOJ reporting", "kind": "entered"},
    {"year": 2008, "event": "DOJ observers begin coverage", "kind": "monitor"},
    {"year": 2013, "event": "Largely subsumed by 2013 follow-on enforcement litigation", "kind": "terminated"}
  ],
  "ny-v-cushman-wakefield-soi": [
    {"year": 2018, "event": "OAG files action against Cushman & Wakefield over SOI discrimination following FHJC testing investigation", "kind": "event"},
    {"year": 2019, "event": "Stipulated judgment entered requiring system-wide acceptance of Section 8 and other subsidies and $115,000 in penalties", "kind": "entered"},
    {"year": 2019, "event": "OAG Civil Rights Bureau begins 3-year compliance review", "kind": "monitor"},
    {"year": 2022, "event": "Compliance term expires; precedent cited in CCHR Douglas Elliman and 2024 A&E Real Estate portfolio settlements", "kind": "terminated"}
  ],
  "nyc-lead-paint-ll1": [
    {"year": 1995, "event": "Coalition files action to force City to enforce Local Law 1 of 1982 lead-paint hazard provisions", "kind": "event"},
    {"year": 1999, "event": "Court orders entered directing HPD and DOHMH to inspect, abate, and report on lead hazards", "kind": "entered"},
    {"year": 2004, "event": "Local Law 1 of 2004 enacted, codifying many decree obligations; case wound down", "kind": "terminated"},
    {"year": 2020, "event": "Local Law 31 of 2020 strengthens lead enforcement framework", "kind": "modification"},
    {"year": 2023, "event": "Local Law 123 of 2023 further tightens enforcement; WE ACT presses HPD over NYCHA compliance gaps", "kind": "modification"}
  ],
  "davis-nycha-rd-section-504": [
    {"year": 1990, "event": "Section 504 and FHAA class action filed against NYCHA", "kind": "event"},
    {"year": 1992, "event": "Consent decree entered requiring meaningful reasonable-accommodation process, accessible-unit set-asides, and disability transfers", "kind": "entered"},
    {"year": 2013, "event": "Obligations folded into federal HUD/DOJ NYCHA Section 504 voluntary compliance agreement", "kind": "modification"},
    {"year": 2013, "event": "Court relinquishes jurisdiction", "kind": "terminated"},
    {"year": 2019, "event": "Successor framework absorbed into HUD/SDNY NYCHA Agreement", "kind": "modification"}
  ],
  "monell-v-dss": [
    {"year": 1971, "event": "Female NYC Board of Education and Department of Social Services employees sue under § 1983 challenging compelled unpaid pregnancy leave", "kind": "event"},
    {"year": 1978, "event": "Supreme Court overrules Monroe v. Pape and holds municipalities are 'persons' subject to § 1983 liability for official policy or custom", "actor": "Justice Brennan, 7-2", "kind": "entered"}
  ],
  "nyc-transit-v-beazer": [
    {"year": 1976, "event": "Methadone users sue NYC Transit Authority challenging blanket employment ban under Title VII and Equal Protection", "kind": "event"},
    {"year": 1979, "event": "Supreme Court reverses Second Circuit and upholds the policy as rationally related to legitimate safety and efficiency concerns", "actor": "Justice Stevens, 6-3", "kind": "entered"}
  ],
  "caban-v-mohammed": [
    {"year": 1976, "event": "Caban challenges § 111 of NY Domestic Relations Law permitting adoption over unwed father's objection", "kind": "event"},
    {"year": 1979, "event": "Supreme Court strikes statute as gender discrimination violating Equal Protection where father has substantial relationship with children", "actor": "Justice Powell, 5-4", "kind": "entered"}
  ],
  "new-york-v-belton": [
    {"year": 1978, "event": "NY courts uphold search of vehicle passenger compartment incident to arrest", "kind": "event"},
    {"year": 1981, "event": "Supreme Court creates bright-line rule allowing search of passenger compartment and containers incident to custodial arrest of a vehicle occupant", "actor": "Justice Stewart, 6-3", "kind": "entered"},
    {"year": 2009, "event": "Arizona v. Gant narrows operational scope of Belton", "kind": "modification"}
  ],
  "loretto-v-teleprompter": [
    {"year": 1976, "event": "Manhattan landlord challenges NY law authorizing cable installations on apartment buildings with only nominal compensation", "kind": "event"},
    {"year": 1982, "event": "Supreme Court establishes per-se physical-takings rule: any permanent physical occupation authorized by government requires just compensation", "actor": "Justice Marshall, 6-3", "kind": "entered"}
  ],
  "new-york-v-ferber": [
    {"year": 1978, "event": "Manhattan bookstore owner prosecuted under NY Penal Law § 263.15 for selling films depicting underage boys", "kind": "event"},
    {"year": 1982, "event": "Supreme Court upholds statute; child pornography is outside First Amendment protection and may be banned without Miller obscenity test", "actor": "Justice White, 9-0", "kind": "entered"}
  ],
  "new-york-v-quarles": [
    {"year": 1980, "event": "NYPD officer asks Quarles location of gun in Queens A&P before Miranda warnings; Quarles points to carton", "kind": "event"},
    {"year": 1984, "event": "Supreme Court creates 'public safety exception' to Miranda for objectively reasonable need to protect police or public from immediate danger", "actor": "Justice Rehnquist, 5-4", "kind": "entered"}
  ],
  "new-york-v-class": [
    {"year": 1981, "event": "NYPD officer opens car door during Bronx traffic stop to view VIN and discovers handgun", "kind": "event"},
    {"year": 1986, "event": "Supreme Court holds limited VIN-area intrusion does not violate Fourth Amendment because no reasonable privacy expectation in a VIN federal law requires visible", "actor": "Justice O'Connor, 7-2", "kind": "entered"}
  ],
  "new-york-v-burger": [
    {"year": 1982, "event": "NYPD auto-crimes division conducts warrantless administrative inspection of Brooklyn vehicle-dismantling yard and finds stolen vehicles", "kind": "event"},
    {"year": 1987, "event": "Supreme Court upholds warrantless inspection of closely-regulated industry as constitutional substitute for warrant", "actor": "Justice Blackmun, 6-3", "kind": "entered"}
  ],
  "nys-club-assn-v-nyc": [
    {"year": 1984, "event": "Club Association challenges NYC ordinance barring discrimination by large private membership clubs, citing First Amendment associational rights", "kind": "event"},
    {"year": 1988, "event": "Supreme Court unanimously upholds the law: city's interest in eradicating discrimination justifies modest burden on associational rights", "actor": "Justice White, 9-0", "kind": "entered"}
  ],
  "new-york-v-harris": [
    {"year": 1984, "event": "NYPD enters Harris's home without a warrant in violation of Payton, then obtains stationhouse confession after Miranda warnings", "kind": "event"},
    {"year": 1990, "event": "Supreme Court holds stationhouse statement following Payton violation is not subject to suppression where police had probable cause", "actor": "Justice White, 5-4", "kind": "entered"}
  ],
  "florence-v-burlington": [
    {"year": 2005, "event": "Florence files suit after being strip-searched on intake at two NJ jails for a minor offense", "kind": "event"},
    {"year": 2012, "event": "Supreme Court holds jail officials may conduct suspicionless visual strip searches of all arrestees admitted to general population regardless of offense severity", "actor": "Justice Kennedy, 5-4", "kind": "entered"}
  ],
  "williams-v-new-york": [
    {"year": 1947, "event": "Brooklyn jury recommends life; trial judge imposes death sentence based on pre-sentence report with hearsay about uncharged conduct", "kind": "event"},
    {"year": 1949, "event": "Supreme Court upholds sentencing procedure: judge may consider information from sources not subject to confrontation if procedure is otherwise fair", "actor": "Justice Black, 7-2", "kind": "entered"}
  ],
  "trump-v-vance": [
    {"year": 2019, "event": "Manhattan DA's grand jury subpoenas Trump's accounting firm for financial records", "kind": "event"},
    {"year": 2020, "event": "Supreme Court rejects absolute presidential immunity from state criminal process and allows subpoena to proceed", "actor": "Chief Justice Roberts, 7-2", "kind": "entered"},
    {"year": 2024, "event": "Manhattan DA secures conviction in case made possible by Vance ruling", "kind": "event"}
  ],
  "city-of-ny-v-fcc": [
    {"year": 1985, "event": "NYC and other cities challenge FCC regulations preempting local authority over cable technical signal-quality standards", "kind": "event"},
    {"year": 1988, "event": "Supreme Court unanimously upholds FCC preemption as within its statutory authority under the Cable Communications Policy Act of 1984", "actor": "Justice White, 9-0", "kind": "entered"}
  ],
  "sibron-v-new-york": [
    {"year": 1965, "event": "NYPD officer reaches into Sibron's pocket during street encounter under NY stop-and-frisk statute", "kind": "event"},
    {"year": 1968, "event": "Supreme Court (companion to Terry v. Ohio) holds the reach exceeded a protective frisk and lacked probable cause", "actor": "Chief Justice Warren, 8-1", "kind": "entered"}
  ],
  "mnn-v-halleck": [
    {"year": 2012, "event": "Producers suspended by Manhattan Neighborhood Network sue claiming First Amendment violations", "kind": "event"},
    {"year": 2019, "event": "Supreme Court holds 5-4 that MNN is not a state actor and is not bound by the First Amendment in programming decisions", "actor": "Justice Kavanaugh, 5-4", "kind": "entered"}
  ]
};

const JUDGES = {
  "nunez-doc": { judge: "Hon. Laura Taylor Swain", judge_note: "Chief Judge, S.D.N.Y.; ordered appointment of Remediation Manager May 2025" },
  "nunez-rikers-receivership": { judge: "Hon. Laura Taylor Swain", judge_note: "Chief Judge, S.D.N.Y." },
  "benjamin-doc": { judge: "Hon. Loretta A. Preska", judge_note: "Senior status, S.D.N.Y." },
  "brad-h-doc-dohmh": { judge: null, judge_note: "Originally Justice Richard F. Braun; no current active justice publicly verified" },
  "floyd-nypd": { judge: "Hon. Analisa Torres", judge_note: "S.D.N.Y.; reassigned from Judge Scheindlin after 2013 recusal" },
  "ligon-nypd": { judge: "Hon. Analisa Torres", judge_note: "S.D.N.Y.; consolidated with Floyd" },
  "davis-nypd-nycha": { judge: "Hon. Analisa Torres", judge_note: "S.D.N.Y.; transferred April 2015 to consolidate stop-and-frisk oversight" },
  "handschu-nypd": { judge: "Hon. Charles S. Haight, Jr.", judge_note: "S.D.N.Y.; presided 1985–2025; took inactive senior status May 19, 2025; current active assignment requires verification on docket" },
  "raza-nypd": { judge: "Hon. Pamela K. Chen", judge_note: "E.D.N.Y." },
  "nycha-hud-agreement": { judge: null, judge_note: "Case dismissed without prejudice 2019; oversight runs through federal monitor reporting to U.S. Attorney / HUD" },
  "baez-nycha-mold": { judge: null, judge_note: "S.D.N.Y.; originally Judge William H. Pauley III (deceased 2021); current active assignment after Pauley's death not publicly verified" },
  "jose-p-doe": { judge: null, judge_note: "Originally Judge Eugene Nickerson (deceased 2002); current assignment not publicly verifiable" },
  "lv-doe-hearing-orders": { judge: "Hon. Loretta A. Preska", judge_note: "Senior status, S.D.N.Y.; issued February 20, 2025 order on IHMS delays" },
  "lv-doe-enforcement": { judge: "Hon. Loretta A. Preska", judge_note: "Senior status, S.D.N.Y." },
  "jsm-doe-due-process": { judge: "Hon. Eric R. Komitee", judge_note: "E.D.N.Y.; Magistrate Judge Roanne L. Mann" },
  "ng-doe-transition": { judge: "Hon. Rachel P. Kovner", judge_note: "E.D.N.Y.; Magistrate Judge Robert M. Levy" },
  "callahan-shelter": { judge: "Hon. Gerald Lebovits", judge_note: "N.Y. Sup. Ct., N.Y. County; supervised 2024 modified Right to Shelter mediation" },
  "callahan-migrant-transfers": { judge: "Hon. Gerald Lebovits", judge_note: "N.Y. Sup. Ct., N.Y. County" },
  "eldredge-shelter-women": { judge: null, judge_note: "Originally Justice Arnold G. Fraiman; enforcement now folded into Callahan framework before Justice Lebovits" },
  "boston-mccain-shelter-families": { judge: null, judge_note: "Originally Justice Helen E. Freedman; family right-to-shelter disputes now consolidated with Callahan before Justice Lebovits" },
  "reynolds-hra": { judge: "Hon. Lewis J. Liman", judge_note: "S.D.N.Y.; succeeded Judge Pauley after Pauley's 2021 death; an April 2024 stipulation confirms ongoing oversight" },
  "vulcan-fdny": { judge: "Hon. Nicholas G. Garaufis", judge_note: "Senior status, E.D.N.Y.; receives status reports from monitor Mark Cohen" },
  "latino-officers-nypd": { judge: "Hon. Lewis A. Kaplan", judge_note: "Senior status, S.D.N.Y." },
  "willowbrook-opwdd": { judge: null, judge_note: "Originally Judges Orrin Judd and John R. Bartels (both deceased); current assignment not publicly verifiable" },
  "doj-adult-homes-olmstead": { judge: "Hon. Nicholas G. Garaufis", judge_note: "E.D.N.Y.; receives Independent Reviewer Clarence Sundram's annual reports" },
  "gulino-doe": { judge: "Hon. Kimba M. Wood", judge_note: "Senior status, S.D.N.Y.; Special Master John S. Siffert handles individual class-member determinations" },
  "people-ny-nypd-protests": { judge: "Hon. Colleen McMahon", judge_note: "Senior status, S.D.N.Y.; consolidated 2020-protest cases" },
  "payne-nypd-protests": { judge: "Hon. Colleen McMahon", judge_note: "Senior status, S.D.N.Y.; lead case in 2020-protest consolidation" },
  "sow-nypd-protests": { judge: "Hon. Colleen McMahon", judge_note: "Senior status, S.D.N.Y." },
  "marisol-acs": { judge: "Hon. Robert J. Ward", judge_note: "S.D.N.Y. (deceased 2003); historical assignment" },
  "dw-doe-evaluations": { judge: "Hon. Edgardo Ramos", judge_note: "S.D.N.Y.; denied motion to dismiss May 27, 2025" },
  "cidny-curb-ramps": { judge: "Hon. George B. Daniels", judge_note: "S.D.N.Y." },
  "council-v-adams-rikers-ice": { judge: "Hon. Mary V. Rosado", judge_note: "N.Y. Sup. Ct., N.Y. County" },
  "nypd-gang-database": { judge: "Hon. Brian M. Cogan", judge_note: "E.D.N.Y." }
};

const DECREES = [
  {
    "id": "nunez-doc",
    "case_name": "Nunez v. City of New York",
    "citation": "11-cv-5845 (S.D.N.Y.)",
    "year_filed": 2011,
    "year_entered": 2015,
    "status": "active-receivership",
    "agencies": ["DOC"],
    "issue_area": "Jails/Corrections",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of people detained in New York City jails (Rikers Island and borough facilities)",
    "summary": "Class action challenging a pattern of excessive force by Department of Correction staff against people in custody. The 2015 consent judgment required sweeping use-of-force, supervision, and young-adult reforms, enforced by a federal monitor. After repeated noncompliance the court found the City in contempt of 18 provisions and in May 2025 granted plaintiffs' motion to appoint a court-supervised remediation manager.",
    "daily_effects": "Correction officers must follow a stricter use-of-force directive, document every incident, and submit to enhanced supervisor review and discipline. People in custody have a federally enforced right to be free from staff brutality and to have serious incidents independently investigated. A court-appointed remediation manager now sits above the DOC commissioner on Nunez-covered operations and reports directly to the federal judge rather than to City Hall.",
    "monitor": "Steve J. Martin (Independent Monitor, appointed 2015, Tillid Group); Nicholas Deml appointed Remediation Manager January 2026",
    "key_obligations": [
      "Comply with revised use-of-force directive and rapid-response reporting",
      "Investigate and discipline staff misconduct on defined timelines",
      "Implement young-adult and 18-21 housing/programming reforms",
      "Provide quarterly compliance data to the monitor",
      "Cooperate with Remediation Manager who has independent authority over Nunez-covered functions",
      "Reduce staff-on-incarcerated-person assaults and slashings/stabbings"
    ],
    "recent_status": "In November 2024 Judge Laura Taylor Swain found the City in contempt of 18 provisions; in May 2025 she ordered appointment of a Remediation Manager; in January 2026 she named former Vermont corrections head Nicholas Deml to the role. Monitor reports through 2025-2026 continue to describe 'glacial' progress and persistent violence.",
    "links": [
      {"label": "Legal Aid Society case page", "url": "https://legalaidnyc.org/court-case/nunez-v-city-of-new-york/"},
      {"label": "Nunez Monitor (Tillid Group) project page", "url": "https://tillidgroup.com/projects/nunez-monitorship/"},
      {"label": "Status Report by the Nunez Independent Monitor, Jan 24 2025", "url": "https://www.nyc.gov/assets/doc/downloads/Nunez/2025-01-24-Report.pdf"},
      {"label": "Status Report by the Nunez Independent Monitor, May 15 2025", "url": "https://tillidgroup.com/wp-content/uploads/2025/05/2025-05-15-Monitors-Report.pdf"},
      {"label": "THE CITY: Federal Judge Pushes for Receiver Takeover of Rikers", "url": "https://www.thecity.nyc/2024/11/27/federal-judge-orders-rikers-receiver/"},
      {"label": "NY1: Federal judge names remediation manager to take control of Rikers", "url": "https://ny1.com/nyc/all-boroughs/news/2026/01/27/federal-judge-names-remediation-manager-to-take-control-of-rikers"},
      {"label": "Vital City: The Limits of Litigation", "url": "https://www.vitalcitynyc.org/articles/the-limits-of-litigation-history-of-federal-oversight-at-rikers"}
    ]
  },
  {
    "id": "benjamin-doc",
    "case_name": "Benjamin v. Horn (originally Benjamin v. Malcolm)",
    "citation": "75-cv-3073 (S.D.N.Y.)",
    "year_filed": 1975,
    "year_entered": 1979,
    "status": "active",
    "agencies": ["DOC"],
    "issue_area": "Jails/Corrections",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of pretrial detainees in New York City jails",
    "summary": "Long-running conditions-of-confinement case originally about overcrowding in NYC pretrial detention. After the Prison Litigation Reform Act narrowed it, the decree continues to govern environmental conditions in city jails - fire safety, sanitation, ventilation, lighting, and plumbing.",
    "daily_effects": "DOC must maintain minimum environmental standards in jail housing areas and submit to compliance monitoring on physical-plant conditions. Detainees retain enforceable rights to functioning plumbing, fire safety systems, ventilation, and basic sanitation. Court-appointed compliance consultants periodically inspect facilities.",
    "monitor": "Court-appointed compliance consultants (ongoing since 1979)",
    "key_obligations": [
      "Maintain fire-safety systems in compliance with court orders",
      "Provide adequate ventilation, heating, and cooling",
      "Maintain sanitary plumbing and food-service conditions",
      "Permit inspections by compliance consultants",
      "Report environmental deficiencies to the court"
    ],
    "recent_status": "Still active in 2024-2025; THE CITY reported in October 2024 that the 50-year-old case is 'still dragging on' with compliance consultants continuing inspections amid persistent infrastructure failures.",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse: Benjamin v. Horn", "url": "https://clearinghouse.net/detail.php?id=199"},
      {"label": "THE CITY: A Court Case Over Basic Sanitary Conditions on Rikers Is Still Dragging On 50 Years Later", "url": "https://www.thecity.nyc/2024/10/29/rikers-benjamin-malcolm-jails-correction-department-compliance-consujltants/"},
      {"label": "Prison Legal News on PLRA effect on Benjamin decree", "url": "https://www.prisonlegalnews.org/news/2010/apr/15/1979-jail-consent-decree-largely-gutted-by-plra-reversed-on-appeal/"}
    ]
  },
  {
    "id": "brad-h-doc-dohmh",
    "case_name": "Brad H. v. City of New York",
    "citation": "Index No. 117882/99 (N.Y. Sup. Ct., N.Y. County)",
    "year_filed": 1999,
    "year_entered": 2003,
    "status": "active",
    "agencies": ["DOC", "DOHMH"],
    "issue_area": "Mental Health",
    "court": "N.Y. Sup. Ct.",
    "plaintiffs": "Class of people with mental illness held in NYC jails who were released without discharge planning",
    "summary": "Class action challenging the City's practice of releasing incarcerated people with serious mental illness in the middle of the night with no medication, referrals, or planning. The 2003 settlement requires the City to provide discharge planning - including medication, Medicaid enrollment, housing referrals, and connections to mental-health providers - to people identified as needing mental-health treatment while in DOC custody.",
    "daily_effects": "DOC and Correctional Health Services must screen and 'flag' incarcerated people with mental-health needs and create written discharge plans. Class members are entitled at release to medication, transportation, Medicaid coverage, and referrals to community treatment. Plaintiffs' counsel continues to monitor approximately 1,200 class members annually.",
    "monitor": "Plaintiffs' counsel monitoring (Urban Justice Center, NYLPI, Debevoise & Plimpton) - no formal federal monitor",
    "key_obligations": [
      "Screen all newly admitted detainees for mental-health needs and assign Brad H. flag",
      "Develop written discharge plan before release",
      "Provide medication, Medicaid, and provider referrals at release",
      "Ensure daytime, not middle-of-the-night, releases where practicable",
      "Report annually on compliance to plaintiffs' counsel"
    ],
    "recent_status": "Active in 2025; share of incarcerated people receiving Brad H. flag rose from 43% in 2016 to 57% in 2025. Compliance monitoring continues and the New York City Comptroller has audited DOHMH follow-up.",
    "links": [
      {"label": "NYLPI: Brad H. v. City of New York case page", "url": "https://www.nylpi.org/case/brad-h-v-city-of-new-york/"},
      {"label": "Data Collaborative for Justice (April 2025): Flagging for Mental Health Needs in NYC Jails", "url": "https://datacollaborativeforjustice.org/wp-content/uploads/2025/04/MH_Brief-1.pdf"},
      {"label": "NYC Comptroller audit of DOHMH discharge-planning follow-up", "url": "https://comptroller.nyc.gov/reports/audit-report-on-the-department-of-health-and-mental-hygienes-follow-up-efforts-on-the-provision-of-mental-health-services-to-discharged-inmates/"},
      {"label": "IBO retrospective: Has the City Met Its Brad H. Obligation?", "url": "https://www.ibo.nyc.ny.us/iboreports/looking-back-at-bradh-settlement-has-the-city-met-obligation-to-provide-mental-health-discharge-planning-2015.html"}
    ]
  },
  {
    "id": "floyd-nypd",
    "case_name": "Floyd v. City of New York",
    "citation": "08-cv-1034 (S.D.N.Y.)",
    "year_filed": 2008,
    "year_entered": 2013,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of Black and Latino New Yorkers stopped under NYPD stop-and-frisk practices",
    "summary": "Class action challenging NYPD's stop, question, and frisk practices as unconstitutional under the Fourth and Fourteenth Amendments. In August 2013 Judge Shira Scheindlin found a citywide pattern of suspicionless and racially discriminatory stops and ordered structural reforms, an independent federal monitor, and a Joint Remedial Process to develop community-informed reforms.",
    "daily_effects": "NYPD officers must articulate and document reasonable suspicion for every stop, and supervisors must review that documentation. Self-initiated stops, frisks, and searches face higher legal scrutiny. The monitor publishes regular reports auditing stop legality; in 2025 the monitor found about 11% of stops unconstitutional even though supervisors approved 99% as lawful.",
    "monitor": "Mylan L. Denerstein (Gibson Dunn), appointed 2022 (succeeded Peter Zimroth, 2013-2022)",
    "key_obligations": [
      "Document reasonable suspicion for every Terry stop",
      "Supervisor review of every stop, frisk, and search",
      "Body-worn camera footage review and audit",
      "Trial Court remedial training and policy revision",
      "Compliance with reforms recommended through the Joint Remedial Process",
      "Discipline officers and supervisors who repeatedly approve unlawful stops"
    ],
    "recent_status": "In February 2026 the monitor reported that almost one-third of NYPD encounters are unreported or miscategorized; 11% of audited stops in the first half of 2025 were unconstitutional. Monitor is urging move from training to discipline.",
    "links": [
      {"label": "Center for Constitutional Rights case page", "url": "https://ccrjustice.org/home/what-we-do/our-cases/floyd-et-al-v-city-new-york-et-al"},
      {"label": "NYPD Monitor official site", "url": "https://www.nypdmonitor.org/about/"},
      {"label": "THE CITY (Feb 2026): NYPD Still Illegally Stopping New Yorkers", "url": "https://www.thecity.nyc/2026/02/26/nypd-illegal-stop-frisk-monitor/"},
      {"label": "Gothamist: Federal monitor - NYPD not reporting all stop and frisk cases", "url": "https://gothamist.com/news/federal-monitor-nypd-is-not-reporting-all-stop-and-frisk-cases"},
      {"label": "Civil Rights Litigation Clearinghouse: Floyd docket", "url": "https://clearinghouse.net/case/12021/"}
    ]
  },
  {
    "id": "ligon-nypd",
    "case_name": "Ligon v. City of New York",
    "citation": "12-cv-2274 (S.D.N.Y.)",
    "year_filed": 2012,
    "year_entered": 2017,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "Bronx residents and visitors stopped for trespass outside buildings in NYPD's Trespass Affidavit Program (Operation Clean Halls)",
    "summary": "Class action challenging the NYPD's practice of stopping, frisking, and arresting people for criminal trespass in and around private apartment buildings enrolled in the Trespass Affidavit Program in the Bronx. The court found Fourth Amendment violations and the parties reached a settlement requiring written policy, training, documentation, and program eligibility reforms, monitored alongside Floyd.",
    "daily_effects": "Bronx residents and their guests can enter and leave TAP-enrolled buildings without being stopped solely because of their presence. Officers must complete a Trespass Crimes Fact Sheet for every trespass arrest in or near TAP buildings. Landlords must show recent criminal incidents to enroll a building.",
    "monitor": "Mylan L. Denerstein (joint monitor with Floyd)",
    "key_obligations": [
      "Adopt written policy on lawful trespass stops near TAP buildings",
      "Document every trespass arrest using the Trespass Crimes Fact Sheet",
      "Tighten building-enrollment standards (recent incidents required)",
      "Train all recruits and supervisors on TAP-area policing",
      "Submit to long-term monitoring jointly with Floyd"
    ],
    "recent_status": "Active under the same monitor as Floyd; reform implementation continues to be tracked in the monitor's stop, question, and frisk audits.",
    "links": [
      {"label": "NYCLU: Ligon settlement notice", "url": "https://www.nyclu.org/court-cases/cleanhalls"},
      {"label": "Bronx Defenders case page", "url": "https://www.bronxdefenders.org/ligon-v-city-of-new-york/"},
      {"label": "NYCLU: Settlement Will End Unconstitutional NYPD Stops in Clean Halls Buildings", "url": "https://www.nyclu.org/press-release/settlement-will-end-unconstitutional-nypd-stops-frisks-and-arrests-clean-halls"},
      {"label": "Civil Rights Litigation Clearinghouse: Ligon", "url": "https://clearinghouse.net/case/12496/"}
    ]
  },
  {
    "id": "davis-nypd-nycha",
    "case_name": "Davis v. City of New York",
    "citation": "10-cv-699 (S.D.N.Y.)",
    "year_filed": 2010,
    "year_entered": 2015,
    "status": "active",
    "agencies": ["NYPD", "NYCHA"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "NYCHA residents and their visitors subjected to NYPD trespass stops and arrests in public housing",
    "summary": "Class action by the NAACP Legal Defense Fund and the Legal Aid Society challenging the NYPD's vertical-patrol stops, frisks, and arrests for criminal trespass in NYCHA buildings as racially discriminatory and lacking reasonable suspicion. The April 2015 settlement revised the NYPD Patrol Guide and NYCHA's lingering rules and required documentation, training, and patrol-guide reform.",
    "daily_effects": "NYCHA residents and authorized visitors have the same legal rights as residents of any other building and cannot be stopped solely for being in a public-housing hallway or lobby. NYPD must document every trespass arrest in NYCHA buildings and follow revised vertical-patrol procedures. NYCHA rules on 'lingering' were narrowed.",
    "monitor": "No standalone monitor; reform implementation overseen jointly with Floyd monitorship and through court reporting",
    "key_obligations": [
      "Revise NYPD Patrol Guide on vertical patrols in NYCHA buildings",
      "Document every trespass arrest in New York City public housing",
      "Modify NYCHA 'lingering' and cooperation rules",
      "Retrain officers on residents' and guests' rights",
      "Report on stop and arrest patterns to plaintiffs' counsel"
    ],
    "recent_status": "Active; in 2019 a federal judge approved an updated public-housing training curriculum. Civil rights organizations have continued to flag noncompliance in monitor reports.",
    "links": [
      {"label": "NAACP LDF: Davis settlement", "url": "https://www.naacpldf.org/update/davis-et-al-v-city-new-york-et-al-class-action-settlement"},
      {"label": "Settlement and Order PDF (Legal Aid)", "url": "https://legalaidnyc.org/wp-content/uploads/2025/10/ECF-330-Davis-Settlement-and-Order.pdf"},
      {"label": "Civil Rights Litigation Clearinghouse: Davis", "url": "https://clearinghouse.net/case/12494/"}
    ]
  },
  {
    "id": "handschu-nypd",
    "case_name": "Handschu v. Special Services Division",
    "citation": "71-cv-2203 (S.D.N.Y.)",
    "year_filed": 1971,
    "year_entered": 1985,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Surveillance",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of political activists subjected to NYPD intelligence-gathering",
    "summary": "Decades-old consent decree (revised most recently in 2017 jointly with Raza) regulating NYPD investigations of political and religious activity. The current guidelines bar investigations in which race, religion, or ethnicity is a substantial motivating factor, and create a civilian representative on the Handschu Committee who reviews investigations and reports violations to the federal court.",
    "daily_effects": "NYPD's Intelligence Bureau must justify each investigation involving political or religious activity, with the Handschu Committee - including an independent civilian appointee - reviewing openings, extensions, and closings monthly. New Yorkers attending political or religious gatherings have judicially enforceable protections against suspicionless infiltration or surveillance. Annual public reports from the civilian rep flag systemic abuses.",
    "monitor": "Civilian Representative on the Handschu Committee (Muhammad U. Faridi since 2023; previously Stephen Robinson, 2017-2023)",
    "key_obligations": [
      "Comply with Revised Handschu Guidelines on political/religious investigations",
      "Submit each investigation to Handschu Committee review",
      "Grant Civilian Representative access to investigative files",
      "Equal-protection bar on investigations motivated by race/religion/national origin",
      "Civilian Representative publishes annual report to the federal court"
    ],
    "recent_status": "Seventh Annual Report of the Civilian Representative was released by S.D.N.Y. on January 27, 2026. Muhammad Faridi continues to serve as Civilian Representative.",
    "links": [
      {"label": "NYCLU: Handschu v. Special Services Division", "url": "https://www.nyclu.org/court-cases/handschu-v-special-services-division-challenging-nypd-surveillance-practices-targeting"},
      {"label": "Mayor Adams Announces Faridi as Civilian Appointee (2023)", "url": "https://www.nyc.gov/office-of-the-mayor/news/125-23/mayor-adams-appointment-muhammad-faridi-civilian-appointee-handschu-committee"},
      {"label": "DOI/Handschu statement (June 2023)", "url": "https://www.nyc.gov/assets/doi/press-releases/2023/June/26Handschu.Stment.Release.06.28.2023.pdf"},
      {"label": "Brennan Center analysis of revised settlement", "url": "https://www.brennancenter.org/our-work/analysis-opinion/settlement-nypd-muslim-surveillance-lawsuits-platform-better-oversight"}
    ]
  },
  {
    "id": "raza-nypd",
    "case_name": "Raza v. City of New York",
    "citation": "13-cv-3448 (E.D.N.Y.)",
    "year_filed": 2013,
    "year_entered": 2017,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Surveillance",
    "court": "E.D.N.Y.",
    "plaintiffs": "Muslim religious and community leaders, mosques, and a charity subjected to NYPD's post-9/11 Muslim surveillance program",
    "summary": "ACLU/NYCLU/CLEAR challenge to NYPD's blanket surveillance of Muslim New Yorkers based on religion. The March 2017 settlement was joint with Handschu and modified the Handschu Guidelines, adding an equal-protection bar, time limits on investigations, and the Civilian Representative role tied to the federal court.",
    "daily_effects": "Muslim New Yorkers receive specific protections against being investigated, mapped, or infiltrated based on religion. NYPD must articulate a permissible objective and supervisory approval before opening an investigation touching political or religious activity. The civilian representative position cannot be abolished by the mayor without judicial approval.",
    "monitor": "Operates through the Handschu Civilian Representative",
    "key_obligations": [
      "Bar investigations where race/religion/ethnicity is a substantial motivating factor",
      "Adopt time limits and supervisory approvals on political/religious investigations",
      "Maintain Civilian Representative position with judicial protection from abolition",
      "Provide regular reporting to the federal court",
      "Train Intelligence Bureau personnel on revised guidelines"
    ],
    "recent_status": "Operative as of 2026 through the joint Handschu framework; Civilian Representative's annual reports continue to be filed.",
    "links": [
      {"label": "ACLU: Raza v. City of New York", "url": "https://www.aclu.org/cases/raza-v-city-new-york-legal-challenge-nypd-muslim-surveillance-program"},
      {"label": "ACLU: Second and Final Judge Approves Settlement (2017)", "url": "https://www.aclu.org/press-releases/second-and-final-judge-approves-settlement-nypd-muslim-surveillance"},
      {"label": "CUNY CLEAR: Raza case", "url": "https://www.cunyclear.org/raza-v-city-of-new-york"},
      {"label": "ACLU: Revised Settlement Enhances Protections", "url": "https://www.aclu.org/press-releases/revised-settlement-enhances-protections-discriminatory-nypd-surveillance-american"}
    ]
  },
  {
    "id": "nycha-hud-agreement",
    "case_name": "United States v. New York City Housing Authority (HUD Agreement)",
    "citation": "18-cv-5213 (S.D.N.Y.)",
    "year_filed": 2018,
    "year_entered": 2019,
    "status": "active",
    "agencies": ["NYCHA"],
    "issue_area": "Housing",
    "court": "S.D.N.Y.",
    "plaintiffs": "United States (HUD/SDNY U.S. Attorney) on behalf of NYCHA residents",
    "summary": "Court-enforced agreement among HUD, the City, and NYCHA resolving federal allegations that NYCHA falsely certified compliance with lead-paint, mold, heat, and inspection rules. The 2019 agreement installed an independent federal monitor over NYCHA operations and required pillar-by-pillar reforms on lead, mold, heat, pests, and elevators, backed by federal funding commitments from the City.",
    "daily_effects": "NYCHA must inspect every covered apartment for lead-based paint, abate hazards in apartments housing children, fix mold within set timelines, and meet heat and elevator-uptime targets. Residents have escalation paths through the monitor's office. Federal HUD oversight and a court-supervised monitor sit on top of NYCHA's leadership.",
    "monitor": "Neil Barofsky and Matt Cipolla (Jenner & Block), Co-Monitors since Feb 28, 2024; Bart Schwartz (Guidepost Solutions) served Feb 2019 - Feb 2024",
    "key_obligations": [
      "Inspect and abate lead-based paint, especially in units housing children under 6",
      "Eradicate mold and moisture within defined timelines",
      "Restore consistent heat and hot water during heating season",
      "Reduce pest infestations and modernize pest-management practices",
      "Meet elevator outage and repair targets",
      "Provide regular public reports to the federal monitor"
    ],
    "recent_status": "In May 2023 the agreement was extended for an additional five years. Jenner & Block monitors took over in Feb 2024 and issued mixed reviews in Sept 2024; oversight remains active in 2025-2026.",
    "links": [
      {"label": "NYCHA Monitor official site", "url": "https://www.nychamonitor.com/"},
      {"label": "THE CITY: Feds Keep NYCHA Under Monitor Watchdog for Five More Years", "url": "https://www.thecity.nyc/2023/05/24/nycha-monitor-extended/"},
      {"label": "City Limits: NYCHA's New Federal Monitor Issues Mixed Reviews (Sept 2024)", "url": "https://citylimits.org/2024/09/04/nychas-new-federal-monitor-issues-mixed-reviews-for-performance-over-the-past-5-years/"},
      {"label": "CBS New York: NYCHA federal monitor faults culture of mismanagement", "url": "https://www.cbsnews.com/newyork/news/nycha-federal-monitor-bart-schwartz-final-report/"},
      {"label": "THE CITY (Feb 2024): Five Years Later, Still a Long Way to Go", "url": "https://www.thecity.nyc/2024/02/02/five-years-nycha-agreement-feds/"}
    ]
  },
  {
    "id": "baez-nycha-mold",
    "case_name": "Baez v. New York City Housing Authority",
    "citation": "13-cv-8916 (S.D.N.Y.)",
    "year_filed": 2013,
    "year_entered": 2014,
    "status": "active",
    "agencies": ["NYCHA"],
    "issue_area": "Housing",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of NYCHA residents with asthma exposed to mold and excessive moisture",
    "summary": "Class action by NRDC and the National Center for Law and Economic Justice on behalf of NYCHA tenants with asthma who suffer from mold contamination. The settlement (and a 2018 revised consent decree) require NYCHA to identify and remediate the root cause of mold rather than just paint over it, with deadlines, data reporting, and a court-appointed Special Master and Ombudsperson.",
    "daily_effects": "NYCHA must respond to mold complaints within fixed timeframes, address underlying leaks, and provide an Ombudsperson tenants can call when work isn't done. Class members with asthma have judicially enforceable rights to timely, root-cause remediation. NYCHA's mold-tracking data is filed with the court.",
    "monitor": "Court-appointed Special Master (industrial-hygienist team), Mold Ombudsperson, and building-systems experts",
    "key_obligations": [
      "Respond to mold complaints on fixed timetables (7/15-day depending on severity)",
      "Address root cause (leaks, ventilation) rather than just surface treatment",
      "Maintain Ombudsperson reachable by tenants",
      "File compliance data with the court regularly",
      "Subject work orders to Special Master review"
    ],
    "recent_status": "Backlog of unresolved mold requests rose from 35,718 (Oct 2019) to 90,589 (April 2023). THE CITY's 10-year review in April 2024 found the case has transformed NYCHA's mold response but delays persist.",
    "links": [
      {"label": "NRDC: Baez v. NYCHA", "url": "https://www.nrdc.org/court-battles/baez-v-new-york-city-housing-authority"},
      {"label": "NCLEJ: Special Master appointment", "url": "https://nclej.org/news/judge-to-appoint-special-master-to-oversee-nycha-compliance-with-mold-contamination-settlement"},
      {"label": "THE CITY (April 2024): Ten Years After NYCHA Mold Repair Pact", "url": "https://www.thecity.nyc/2024/04/22/nycha-baez-mold-damage-repairs/"},
      {"label": "THE CITY (June 2023): NYCHA's Decade of Court-Monitored Mold Cleanup", "url": "https://www.thecity.nyc/2023/6/29/23777515/nycha-mold-cleanup-progress-baez-monitor"}
    ]
  },
  {
    "id": "jose-p-doe",
    "case_name": "Jose P. v. Ambach",
    "citation": "79-cv-270 (E.D.N.Y.)",
    "year_filed": 1979,
    "year_entered": 1980,
    "status": "active",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "E.D.N.Y.",
    "plaintiffs": "Class of New York City public school children with disabilities awaiting special-education evaluations and placements",
    "summary": "Foundational federal special-education class action under what is now the IDEA (Individuals with Disabilities Education Act). The 1980 judgment requires the New York City Department of Education to evaluate, place, and provide services to students with disabilities within set timeframes and to report regularly to plaintiffs' counsel on its compliance with referral, evaluation, and placement deadlines.",
    "daily_effects": "DOE must complete special-education evaluations within fixed days of referral and place students in appropriate programs within state-law timelines. Families have a judicially enforceable right to timely Jose P. compliance, and DOE issues routine Jose P. reports tracking timeliness. Plaintiffs' counsel meet with DOE every two weeks.",
    "monitor": "Plaintiffs' counsel oversight with regular DOE reporting to the court",
    "key_obligations": [
      "Complete initial evaluations within Jose P. timelines",
      "Place students in recommended programs within state-law deadlines",
      "Provide routine 'Jose P. reports' on timeliness",
      "Meet biweekly with plaintiffs' counsel",
      "Maintain capacity to serve growing number of students with IEPs"
    ],
    "recent_status": "Still operative; DOE continues Jose P. reporting and biweekly meetings, though chronic timeliness failures have prompted newer class actions (e.g., M.G., J.S.M.) targeting evaluation delays.",
    "links": [
      {"label": "Jose P. v. Ambach text (NYC Civil Rights History)", "url": "https://nyccivilrightshistory.org/plain-text/jose-p-vs-ambach/"},
      {"label": "NYS Comptroller report citing Jose P. obligations", "url": "https://www.osc.state.ny.us/sites/default/files/reports/documents/pdf/2018-11/report-3-2009.pdf"},
      {"label": "Jose P. v. Ambach 557 F. Supp. 1230 (E.D.N.Y. 1983)", "url": "https://law.justia.com/cases/federal/district-courts/FSupp/557/1230/2239099/"}
    ]
  },
  {
    "id": "lv-doe-hearing-orders",
    "case_name": "L.V. v. New York City Department of Education",
    "citation": "03-cv-9917 (S.D.N.Y.)",
    "year_filed": 2003,
    "year_entered": 2007,
    "status": "active",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of NYC students with disabilities whose IDEA impartial-hearing orders DOE failed to implement",
    "summary": "Class action by Advocates for Children challenging DOE's chronic failure to implement orders issued by impartial hearing officers under IDEA. The 2007 settlement requires DOE to implement hearing orders within set timeframes (typically 35 days where the order does not specify). After more than a decade of noncompliance, in July 2023 Judge Loretta Preska entered a sweeping order incorporating Special Master recommendations and 41+ deadlines.",
    "daily_effects": "When an impartial hearing officer orders DOE to pay for tuition, therapy, or compensatory services, DOE must implement that order within fixed timelines. Families can call a DOE-operated implementation hotline when orders go unfulfilled and escalate to the court. DOE must overhaul its internal hearing-order tracking systems.",
    "monitor": "Court-appointed Special Master overseeing implementation system reforms",
    "key_obligations": [
      "Implement IHO orders within specified timelines (default 35 days)",
      "Operate an order-implementation hotline for parents",
      "Restructure internal tracking systems per Special Master plan",
      "Meet 41+ court-ordered deadlines on system reform",
      "Report compliance metrics to the court"
    ],
    "recent_status": "Active; July 2023 court order remains in implementation as of 2025-2026 with ongoing Special Master oversight.",
    "links": [
      {"label": "Advocates for Children: L.V. case page", "url": "https://advocatesforchildren.org/case/l-v-v-nyc-department-of-education/"},
      {"label": "Milbank: Judge Orders DOE to Fix Broken Hearing Order System", "url": "https://www.milbank.com/en/news/judge-orders-nyc-department-of-education-to-fix-broken-system-for-implementing-special-education-hearing-orders.html"},
      {"label": "Civil Rights Litigation Clearinghouse: L.V.", "url": "https://clearinghouse.net/case/13657/"},
      {"label": "DOE notice PDF on L.V.", "url": "https://pwsblobprd.schools.nyc/prd-pws/docs/default-source/default-document-library/l-v-v-nyc-department-of-education.pdf"}
    ]
  },
  {
    "id": "jsm-doe-due-process",
    "case_name": "J.S.M. v. New York City Department of Education",
    "citation": "20-cv-705 (E.D.N.Y.)",
    "year_filed": 2020,
    "year_entered": 2025,
    "status": "active",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "E.D.N.Y.",
    "plaintiffs": "Class of NYC students with disabilities whose IDEA due-process hearings were not held or decided within federal timelines",
    "summary": "Class action by NYLAG challenging the chronic backlog and delay in DOE/NYSED impartial hearings under the IDEA. The court granted final approval of the settlement on April 22, 2025, committing DOE to systemic reforms intended to clear the hearing backlog and meet federal due-process timelines.",
    "daily_effects": "Families requesting IDEA due-process hearings should see faster scheduling and decisions, and DOE must add hearing-officer capacity and procedural reforms. Class members gain enforceable rights to timely hearings and decisions on IEP disputes.",
    "monitor": null,
    "key_obligations": [
      "Meet federal IDEA hearing-timeline requirements",
      "Add impartial hearing officer capacity and case management",
      "Implement reforms to scheduling and decision tracking",
      "Report compliance data to plaintiffs and the court",
      "Provide notice of settlement to class members"
    ],
    "recent_status": "Final settlement approval granted April 22, 2025; implementation in 2025-2026.",
    "links": [
      {"label": "NYLAG: JSM v. NYC DOE", "url": "https://nylag.org/jsm/"},
      {"label": "NYC DOE J.S.M. notice page", "url": "https://www.schools.nyc.gov/learning/special-education/help/jsm-vs-doe-notice-of-proposed-class-action-settlement"}
    ]
  },
  {
    "id": "ng-doe-transition",
    "case_name": "N.G. by F.E. v. New York City Department of Education",
    "citation": "14-cv-6529 (E.D.N.Y.)",
    "year_filed": 2014,
    "year_entered": null,
    "status": "active",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "E.D.N.Y.",
    "plaintiffs": "Class of NYC students age 14+ with IEPs entitled to transition services under the IDEA",
    "summary": "Class action concerning DOE's failure to provide adequate transition planning and services to special-education students preparing to leave school. The case challenges DOE's IEP transition-planning practices for students 14 and older.",
    "daily_effects": "Students age 14+ with IEPs are entitled to meaningful transition services in their IEPs aimed at post-secondary education, employment, and independent living. DOE must follow procedures the case puts in place for assessing and providing those services.",
    "monitor": null,
    "key_obligations": [
      "Provide IDEA-compliant transition planning starting at age 14",
      "Conduct transition assessments and document services in IEPs",
      "Train staff on transition-services requirements",
      "Report on compliance to plaintiffs"
    ],
    "recent_status": "Ongoing class action litigation; settlement / consent posture is in flux as of 2026.",
    "links": [
      {"label": "NYC DOE N.G. case notice", "url": "https://www.schools.nyc.gov/learning/special-education/help/n-g-by-f-e-v-new-york-city-department-of-education-et-al"}
    ]
  },
  {
    "id": "callahan-shelter",
    "case_name": "Callahan v. Carey",
    "citation": "Index No. 42582/79 (N.Y. Sup. Ct., N.Y. County)",
    "year_filed": 1979,
    "year_entered": 1981,
    "status": "in-modification",
    "agencies": ["DHS"],
    "issue_area": "Homelessness",
    "court": "N.Y. Sup. Ct.",
    "plaintiffs": "Homeless single adult men (and, through Eldredge, women) in New York City",
    "summary": "The foundational right-to-shelter consent decree, signed in 1981, requires New York City to provide shelter to any homeless single adult man who requests it, meeting basic standards on bed, hygiene, and safety. In March 2024 Mayor Adams and the Legal Aid Society / Coalition for the Homeless reached a stipulation modifying applications during a declared State of Emergency to manage the asylum-seeker influx, while preserving the underlying right.",
    "daily_effects": "Any single adult who arrives at DHS intake and lacks safe housing is entitled to a shelter bed that night; shelters must meet decree standards. During the State of Emergency, adult migrants get 30-day shelter stays (60 for those under 23) without automatic re-application unless extenuating circumstances or a disability accommodation. The City cannot categorically deny shelter to a class of people.",
    "monitor": null,
    "key_obligations": [
      "Provide shelter to every eligible single adult who applies",
      "Meet Callahan minimum standards on bed, bathroom, security",
      "Honor State-of-Emergency rules on 30/60-day stays for adult migrants",
      "Backlog elimination for reapplications",
      "End use of waiting rooms as de facto shelter"
    ],
    "recent_status": "March 2024 stipulation in effect; the underlying decree remains in force. Coalition for the Homeless and Legal Aid continue to monitor compliance through 2025-2026.",
    "links": [
      {"label": "Coalition for the Homeless: Callahan settlement announcement (2024)", "url": "https://www.coalitionforthehomeless.org/press/legal-aid-coalition-for-the-homeless-announce-settlement-in-callahan-v-carey-preserving-nycs-right-to-shelter-settlement-protects-the-right-to-shelter-for-anyone-in-need/"},
      {"label": "NYC Mayor: Adams Announces Agreement With Legal Aid in Callahan", "url": "https://www.nyc.gov/office-of-the-mayor/news/200-24/mayor-adams-agreement-the-legal-aid-society-callahan-right-shelter-"},
      {"label": "Legal Aid: Callahan v. Carey case page", "url": "https://legalaidnyc.org/court-case/callahan-v-carey/"},
      {"label": "Coalition for the Homeless: The Callahan Legacy", "url": "https://www.coalitionforthehomeless.org/our-programs/advocacy/legal-victories/the-callahan-legacy-callahan-v-carey-and-the-legal-right-to-shelter/"}
    ]
  },
  {
    "id": "eldredge-shelter-women",
    "case_name": "Eldredge v. Koch",
    "citation": "N.Y. Sup. Ct., N.Y. County (1982)",
    "year_filed": 1982,
    "year_entered": 1983,
    "status": "active",
    "agencies": ["DHS"],
    "issue_area": "Homelessness",
    "court": "N.Y. Sup. Ct.",
    "plaintiffs": "Homeless single women in New York City",
    "summary": "Class action extending the Callahan right to shelter and qualitative standards to single homeless women. The Appellate Division affirmed that the Callahan decree applies to women's shelters, requiring parity in shelter standards.",
    "daily_effects": "DHS must offer women's shelters that meet the same Callahan quality standards as men's: adequate beds, bathrooms, safety, and capacity. A single woman seeking shelter has the same right to a bed as a single man.",
    "monitor": null,
    "key_obligations": [
      "Apply Callahan minimum standards to women's shelters",
      "Maintain capacity sufficient to meet demand",
      "Provide plumbing, bathing, and bed standards equivalent to men's shelters"
    ],
    "recent_status": "Operative as the women-side counterpart of Callahan; modifications run through the 2024 Callahan stipulation framework.",
    "links": [
      {"label": "Coalition for the Homeless: Callahan Legacy (discusses Eldredge)", "url": "https://www.coalitionforthehomeless.org/our-programs/advocacy/legal-victories/the-callahan-legacy-callahan-v-carey-and-the-legal-right-to-shelter/"},
      {"label": "State Court Report: Contentious History of NYC's Right to Shelter", "url": "https://statecourtreport.org/our-work/analysis-opinion/contentious-history-behind-new-york-citys-right-shelter"}
    ]
  },
  {
    "id": "boston-mccain-shelter-families",
    "case_name": "Boston v. City of New York (successor to McCain v. Koch)",
    "citation": "Index No. 402295/2008 (N.Y. Sup. Ct.); McCain orig. 41023/1983",
    "year_filed": 1983,
    "year_entered": 2008,
    "status": "active",
    "agencies": ["DHS"],
    "issue_area": "Homelessness",
    "court": "N.Y. Sup. Ct.",
    "plaintiffs": "Homeless families with children in New York City",
    "summary": "Successor to the 25-year McCain v. Koch litigation, the 2008 Boston settlement is the 'final, permanent, enforceable' agreement governing the City's obligations to homeless families with children, including intake, eligibility, placement timing, and minimum shelter conditions.",
    "daily_effects": "Eligible families with children are entitled to safe, sanitary, and decent shelter, with intake and eligibility rules governed by the settlement. The City must place families within established timelines and meet defined conditions standards.",
    "monitor": null,
    "key_obligations": [
      "Provide safe, sanitary, decent family shelter on demand for eligible families",
      "Apply intake/eligibility procedures consistent with the settlement",
      "Place families within set timelines",
      "Maintain shelter conditions standards",
      "Report compliance to plaintiffs' counsel"
    ],
    "recent_status": "Remains operative as the family-side right-to-shelter framework. The 2024 Callahan modification expressly does not apply to families with children.",
    "links": [
      {"label": "Legal Aid: McCain v. Koch / Boston case page", "url": "https://legalaidnyc.org/court-case/mccain-v-koch/"},
      {"label": "Coalition for the Homeless: Callahan Legacy (discusses Boston)", "url": "https://www.coalitionforthehomeless.org/our-programs/advocacy/legal-victories/the-callahan-legacy-callahan-v-carey-and-the-legal-right-to-shelter/"},
      {"label": "Clearinghouse: McCain v. Koch", "url": "https://clearinghouse.net/case/11073/"}
    ]
  },
  {
    "id": "reynolds-hra",
    "case_name": "Reynolds v. Giuliani",
    "citation": "98-cv-8877 (S.D.N.Y.)",
    "year_filed": 1998,
    "year_entered": 2005,
    "status": "active",
    "agencies": ["HRA"],
    "issue_area": "Public Benefits",
    "court": "S.D.N.Y.",
    "plaintiffs": "NYC residents seeking to apply for food stamps (SNAP), Medicaid, and cash assistance at HRA Job Centers",
    "summary": "Class action challenging HRA Job Center practices that deterred or prevented people from applying for and timely receiving food stamps, Medicaid, and cash assistance. After a 2001 bench trial Judge Pauley granted declaratory and injunctive relief, leading to long-running compliance orders governing intake, expedited SNAP, and emergency-assistance access.",
    "daily_effects": "HRA must accept applications for SNAP, Medicaid, and cash assistance on day one and process them within federal/state timelines. Job Center workers cannot divert applicants away from filing or impose extra hurdles. Class members have judicially enforceable rights to expedited SNAP and emergency assistance.",
    "monitor": null,
    "key_obligations": [
      "Accept and date-stamp applications on the day of request",
      "Process expedited SNAP within statutory timelines",
      "Provide emergency assistance to eligible households",
      "Train Job Center staff on diversion prohibitions",
      "Report compliance data to plaintiffs' counsel"
    ],
    "recent_status": "Compliance framework remains in place; advocates have continued to flag SNAP backlogs at HRA into 2025 amid staffing shortfalls.",
    "links": [
      {"label": "Reynolds v. Giuliani, 35 F. Supp. 2d 331 (S.D.N.Y. 1999)", "url": "https://law.justia.com/cases/federal/district-courts/FSupp2/35/331/2491424/"},
      {"label": "Harvard CR-CL Law Review article on Reynolds", "url": "https://journals.law.harvard.edu/crcl/wp-content/uploads/sites/80/2015/07/Reforming-Welfare-after-Welfare-Reform-Reynolds-v.-Giuliani.pdf"},
      {"label": "CourtListener docket", "url": "https://www.courtlistener.com/docket/12084721/parties/reynolds-v-giuliani/"}
    ]
  },
  {
    "id": "vulcan-fdny",
    "case_name": "United States and Vulcan Society v. City of New York",
    "citation": "07-cv-2067 (E.D.N.Y.)",
    "year_filed": 2007,
    "year_entered": 2014,
    "status": "active",
    "agencies": ["FDNY"],
    "issue_area": "Employment Discrimination",
    "court": "E.D.N.Y.",
    "plaintiffs": "United States and the Vulcan Society (Black firefighters) on behalf of Black and Latino applicants discriminated against by FDNY entrance exams",
    "summary": "DOJ and Vulcan Society challenge to FDNY firefighter entrance exams that disparately excluded Black and Latino applicants. The 2014 settlement and a 2015 monetary relief consent decree awarded approximately $99 million in back pay/benefits and required a new entrance exam, court-appointed monitor over recruiting and hiring, and structural diversity reforms.",
    "daily_effects": "FDNY's hiring exam, recruitment, and academy processes operate under court-supervised reform requirements designed to ensure non-discriminatory selection. Diversity outreach and recruitment targets are court-monitored. Eligible class members received back pay, retroactive seniority, and priority hiring opportunities.",
    "monitor": "Court-appointed monitor over FDNY recruiting and hiring process (appointed by Judge Garaufis)",
    "key_obligations": [
      "Administer a new, validated entrance examination",
      "Operate court-monitored recruitment and outreach efforts",
      "Pay $99 million in back pay and benefits per allocation procedures",
      "Provide retroactive seniority and priority hiring to eligible class members",
      "Report on demographic outcomes of recruiting classes"
    ],
    "recent_status": "Reform measures remain in effect; FDNY incoming classes have been the most diverse in department history (17% Black, 24% Latino) under the decree.",
    "links": [
      {"label": "DOJ: U.S. v. City of New York (FDNY) overview", "url": "https://www.justice.gov/archives/crt-fdny/overview"},
      {"label": "NAACP LDF: Vulcan Society case page", "url": "https://naacpldf.org/case-issue/united-states-america-vulcan-society-inc-v-city-new-york/"},
      {"label": "Center for Constitutional Rights: Vulcan Society case page", "url": "https://ccrjustice.org/home/what-we-do/our-cases/united-states-america-and-vulcan-society-inc-v-city-new-york"},
      {"label": "Clearinghouse: Vulcan Society", "url": "https://clearinghouse.net/case/10324/"}
    ]
  },
  {
    "id": "latino-officers-nypd",
    "case_name": "Latino Officers Association of New York v. City of New York",
    "citation": "99-cv-9568 (S.D.N.Y.)",
    "year_filed": 1999,
    "year_entered": 2004,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Employment Discrimination",
    "court": "S.D.N.Y.",
    "plaintiffs": "Black and Latino uniformed NYPD officers",
    "summary": "Class action by Black and Latino NYPD officers alleging hostile work environment, disparate discipline, and retaliation. The September 2004 settlement approved by Judge Lewis Kaplan required $20 million in damages and structural reforms to NYPD's disciplinary and equal-employment systems, including a review unit to audit discipline outcomes by race.",
    "daily_effects": "NYPD must operate revised disciplinary and equal-employment procedures with record-keeping and database requirements. A review unit analyzes whether Black and Latino officers face disparate investigation, charging, or discipline. Officers have improved internal channels to report discrimination and retaliation.",
    "monitor": null,
    "key_obligations": [
      "Maintain a review unit auditing discipline for racial disparity",
      "Adopt revised EEO procedures and record-keeping",
      "Investigate and address retaliation complaints",
      "Report disciplinary demographics for review",
      "Pay damages to class members"
    ],
    "recent_status": "Structural reforms remain in force; periodic disputes over compliance continue.",
    "links": [
      {"label": "Clearinghouse: Latino Officers Ass'n v. City of New York", "url": "https://clearinghouse.net/case/10668/"},
      {"label": "Gotham Gazette: City Settles Discrimination Lawsuit by Black and Latino Officers", "url": "https://www.gothamgazette.com/index.php/about/2318-city-settles-discrimination-lawsuit-by-black-and-latino-officers"}
    ]
  },
  {
    "id": "willowbrook-opwdd",
    "case_name": "New York State Association for Retarded Children v. Carey (Willowbrook)",
    "citation": "72-cv-356 (E.D.N.Y.)",
    "year_filed": 1972,
    "year_entered": 1975,
    "status": "active",
    "agencies": ["OPWDD"],
    "issue_area": "Disability Rights",
    "court": "E.D.N.Y.",
    "plaintiffs": "Class of people with developmental disabilities institutionalized at Willowbrook State School (and successors)",
    "summary": "Landmark 1975 Willowbrook Consent Judgment - replaced by a 1993 Permanent Injunction - that committed New York State to community living, services, and protections for people with developmental disabilities once confined at Willowbrook. While the defendants are state (OPWDD), the case sets the baseline for many community-based services delivered in New York City to Willowbrook Class Members.",
    "daily_effects": "Willowbrook Class Members are entitled to specified community-based, integrated services in the least restrictive setting, regardless of ability to pay or Medicaid eligibility. OPWDD must maintain service planning, advocacy, and protections for class members in New York City and statewide.",
    "monitor": "Consumer Advisory Board (CAB) and Willowbrook Class advocacy structures",
    "key_obligations": [
      "Provide community-based services in least restrictive settings",
      "Maintain free services regardless of Medicaid eligibility",
      "Operate Willowbrook Class Member identification and protection processes",
      "Coordinate care management for class members",
      "Report on class-member outcomes"
    ],
    "recent_status": "50th anniversary observed in 2025; the Permanent Injunction remains in force as of 2026.",
    "links": [
      {"label": "OPWDD: Willowbrook overview", "url": "https://opwdd.ny.gov/willowbrook"},
      {"label": "OPWDD: 50th Anniversary commemoration", "url": "https://opwdd.ny.gov/news/governor-hochul-commemorates-50th-anniversary-willowbrook-consent-decree-and-celebrates-new"},
      {"label": "NYCLU: 50 Years After a Landmark Lawsuit", "url": "https://www.nyclu.org/commentary/50-years-after-landmark-lawsuit-how-does-ny-treat-people-developmental-disabilities"},
      {"label": "AHRC NYC: 50 Years of the Willowbrook Consent Decree", "url": "https://www.ahrcnyc.org/news/50-years-of-the-willowbrook-consent-decree/"}
    ]
  },
  {
    "id": "doj-adult-homes-olmstead",
    "case_name": "United States v. New York (Adult Homes / Olmstead)",
    "citation": "Settlement Agreement (E.D.N.Y. 2014)",
    "year_filed": 2013,
    "year_entered": 2014,
    "status": "active",
    "agencies": ["DOHMH"],
    "issue_area": "Disability Rights",
    "court": "E.D.N.Y.",
    "plaintiffs": "United States Department of Justice on behalf of people with serious mental illness segregated in NYC adult homes",
    "summary": "DOJ ADA/Olmstead settlement requiring New York to offer supported housing to thousands of people with mental illness segregated in 23 New York City adult homes. While the State is the lead defendant, the City's DOHMH-funded systems and supported-housing infrastructure are central to implementation.",
    "daily_effects": "Adult home residents with serious mental illness are offered scattered-site supported apartments with rental assistance and on-site supports, allowing them to live in integrated community settings. Discharge planning, in-reach, and choice counseling must be provided. Supported-housing capacity in New York City has expanded substantially.",
    "monitor": "Independent reviewer under the settlement",
    "key_obligations": [
      "Offer supported housing to eligible adult home residents",
      "Conduct in-reach, assessment, and choice counseling",
      "Provide community-based mental health services",
      "Report transition numbers and outcomes to DOJ",
      "Comply with ADA/Olmstead integration mandate"
    ],
    "recent_status": "Implementation continues; supported-housing transitions ongoing.",
    "links": [
      {"label": "DOJ press release: Comprehensive Agreement on NYC Adult Home Residents", "url": "https://www.justice.gov/archives/opa/pr/justice-department-obtains-comprehensive-agreement-ensure-new-york-city-adult-home-residents"},
      {"label": "Behavioral Health News: Court-Approved Settlement Gives NY Adult Home Residents Their Lives Back", "url": "https://behavioralhealthnews.org/court-approved-settlement-gives-new-york-adult-home-residents-their-lives-back/"}
    ]
  },
  {
    "id": "gulino-doe",
    "case_name": "Gulino v. Board of Education",
    "citation": "96-cv-8414 (S.D.N.Y.)",
    "year_filed": 1996,
    "year_entered": 2015,
    "status": "active",
    "agencies": ["DOE"],
    "issue_area": "Employment Discrimination",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of Black and Latino NYC public school teachers required to pass discriminatory licensing exams",
    "summary": "Class action under Title VII challenging the NTE and successor LAST/LAST-2 teacher licensing exams as not job-related and racially discriminatory. The court found liability against the NYC Board of Education; remedy proceedings have awarded hundreds of millions of dollars in back pay, pension credit, and benefits to class members - potentially up to $1.8 billion in total.",
    "daily_effects": "Eligible class members receive monetary damages, retroactive pension credit, and seniority. DOE remains under court supervision for individualized damages determinations and pension/benefits adjustments through court-appointed special masters.",
    "monitor": "Court-appointed special masters administering individualized damages awards",
    "key_obligations": [
      "Pay back-pay damages to qualifying class members",
      "Restore retroactive pension credit and seniority",
      "Adjust DOE benefits records consistent with rulings",
      "Cooperate with special master damages proceedings",
      "No longer use the LAST-2 as a Title VII-disqualifying barrier"
    ],
    "recent_status": "Individualized damages awards continued through 2023-2025; aggregate liability has reached hundreds of millions with maximum exposure near $1.8 billion.",
    "links": [
      {"label": "Center for Constitutional Rights: Gulino case page", "url": "https://ccrjustice.org/home/what-we-do/our-cases/gulino-v-board-education-city-new-york-and-new-york-state-education"},
      {"label": "Gulino Litigation overview", "url": "http://www.gulinolitigation.com/overview"},
      {"label": "Gothamist: City Faces Largest-Ever Lawsuit Payout to NYC Teachers", "url": "https://gothamist.com/news/city-pay-largest-ever-settlement-nyc-teachers-affected-discriminatory-certification-tests"},
      {"label": "Clearinghouse: Gulino", "url": "https://clearinghouse.net/case/11541/"}
    ]
  },
  {
    "id": "people-ny-nypd-protests",
    "case_name": "People of the State of New York v. City of New York (NYPD Protest Reform)",
    "citation": "21-cv-322 (S.D.N.Y.)",
    "year_filed": 2021,
    "year_entered": 2024,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "New York State Attorney General Letitia James (co-resolved with Payne v. de Blasio and Sierra Club / NYCLU / Legal Aid actions)",
    "summary": "Suite of protest-response lawsuits arising from the NYPD's 2020 racial justice protest response, resolved in a joint 2023 settlement (court-authorized February 2024) that mandates a four-tier protest response system, restrictions on encirclement/kettling, press protections, and a multi-year external oversight committee.",
    "daily_effects": "NYPD's default response to a protest is now tiered: Tier 1 accommodates peaceful marches, with escalation only on probable cause or specific threats. Encirclement is barred; press members cannot be arrested for documenting protests. A senior-level NYPD position oversees protest policy; an external committee monitors compliance for years.",
    "monitor": "External oversight committee with multi-year mandate to monitor implementation and compliance",
    "key_obligations": [
      "Implement four-tier protest response system",
      "Bar encirclement/kettling of protesters",
      "Protect members of the press from arrest",
      "Create senior-level NYPD position overseeing protest policy",
      "Report data on protest deployments and arrests",
      "Cooperate with external oversight committee"
    ],
    "recent_status": "Settlement entered February 2024 after federal court rejection of PBA opposition; implementation underway through 2025-2026.",
    "links": [
      {"label": "NY AG: 2023 Agreement with NYPD to Reform Policing of Protests", "url": "https://ag.ny.gov/press-release/2023/attorney-general-james-legal-aid-society-and-nyclu-announce-agreement-nypd"},
      {"label": "NY AG: 2024 Court Decision Authorizing Reforms", "url": "https://ag.ny.gov/press-release/2024/attorney-general-james-announces-court-decision-authorizing-reforms-nypds"},
      {"label": "NYCLU: How Our NYPD Protest Settlement Works", "url": "https://www.nyclu.org/commentary/how-our-nypd-protest-settlement-works-why-it-matters-and-why-it-isnt-enough"},
      {"label": "NYC Law Department: Protest Settlement", "url": "https://www.nyc.gov/site/law/news/23-16/mayor-adams-nypd-new-approach-handling-protests-resolve-litigation-stemming-2020"},
      {"label": "Clearinghouse: People of New York v. New York", "url": "https://clearinghouse.net/case/18020/"}
    ]
  },
  {
    "id": "payne-nypd-protests",
    "case_name": "Payne v. de Blasio",
    "citation": "20-cv-8924 (S.D.N.Y.)",
    "year_filed": 2020,
    "year_entered": 2024,
    "status": "active",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "Individuals arrested or assaulted by NYPD during 2020 George Floyd protests",
    "summary": "Companion class action to People of New York v. City of New York, resolved through the same joint settlement establishing the four-tier protest response and structural reforms. In addition the NYCLU and Legal Aid secured over $500,000 for individual clients brutalized by the NYPD.",
    "daily_effects": "Same operational changes as the AG protest settlement - tiered deployment, encirclement bans, press protections - now bind NYPD field operations. Individual plaintiffs received monetary settlements.",
    "monitor": "Same external oversight committee as People of NY action",
    "key_obligations": [
      "Implement four-tier protest response system",
      "Ban kettling and other excessive crowd-control tactics",
      "Protect press and legal observers",
      "Comply with external oversight monitoring",
      "Pay individual settlements to plaintiffs"
    ],
    "recent_status": "Court approval granted in 2024; implementation ongoing.",
    "links": [
      {"label": "Legal Aid: Payne v. de Blasio case page", "url": "https://legalaidnyc.org/court-case/payne-v-de-blasio/"},
      {"label": "NYCLU: Court Approves Overhaul of NYPD Protest Practices", "url": "https://www.nyclu.org/press-release/court-approves-overhaul-nypd-protest-practices"},
      {"label": "NYCLU: NYPD to Implement New Phase of Landmark Protest Settlement", "url": "https://www.nyclu.org/press-release/nypd-to-implement-new-phase-of-landmark-protest-settlement"}
    ]
  },
  {
    "id": "sow-nypd-protests",
    "case_name": "Sow v. City of New York",
    "citation": "21-cv-533 (S.D.N.Y.)",
    "year_filed": 2021,
    "year_entered": 2024,
    "status": "terminated-recent",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "Approximately 1,380 protesters arrested by NYPD in Manhattan and Brooklyn between May 28 and June 4, 2020",
    "summary": "Class action by the National Lawyers Guild on behalf of 2020 BLM protesters subjected to mass arrests, kettling, pepper spray, and excessive force. The July 2023 settlement provided $9,500 to each of approximately 1,380 class members - the largest per-person protester class settlement in U.S. history at the time, totaling over $13 million.",
    "daily_effects": "Class members received cash payments. The case did not establish ongoing operational reforms - those came through the parallel People of NY / Payne settlement - but Sow established a strong financial precedent for accountability.",
    "monitor": null,
    "key_obligations": [
      "Pay $9,500 per class member arrested at covered protests",
      "Pay enhanced amounts to named plaintiffs",
      "Distribute funds through court-approved claims process"
    ],
    "recent_status": "Damages settlement administered; class-claims process completed in 2024.",
    "links": [
      {"label": "SITU: Sow v. City of New York project page", "url": "https://situ.nyc/research/projects/sow-et-al-v-city-of-new-york-et-al"},
      {"label": "Democracy Now: NYC to Pay $13M to Those Attacked by Police in 2020 BLM Protests", "url": "https://www.democracynow.org/2023/7/24/nyc_george_floyd_settlement"},
      {"label": "NLG press release", "url": "https://situ.nyc/files/pdfs/6090/20230719-nlg-press-release-final-version.pdf"},
      {"label": "CNN: NYC agrees to pay more than $13 million over police tactics", "url": "https://www.cnn.com/2023/07/20/us/nyc-george-floyd-demonstrations-police-settlement/index.html"}
    ]
  },
  {
    "id": "nunez-rikers-receivership",
    "case_name": "Nunez v. City of New York (remediation manager / receivership phase)",
    "citation": "11-cv-5845 (S.D.N.Y.)",
    "year_filed": 2011,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOC"],
    "issue_area": "Jails/Corrections",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of people detained at Rikers Island (Legal Aid Society and Emery Celli Brinckerhoff Abady Ward & Maazel)",
    "summary": "After May 2025 contempt findings, Judge Laura Taylor Swain ordered appointment of an outside 'remediation manager' (functional receiver) with broad authority over DOC operations. A December 2025 order detailed the manager's sweeping powers; selection and scope remain in active litigation in 2026.",
    "daily_effects": "If fully implemented, the remediation manager will assume operational control over staffing, use-of-force policy, intake/classification, and mental-health coordination at Rikers — reporting directly to the court rather than the commissioner. Day-to-day decisions about discipline, post assignments, and emergency response would move outside City Hall's chain of command. This would make Rikers the 13th U.S. jail or prison system placed under federal receivership since 1979.",
    "monitor": null,
    "key_obligations": [
      "Appointment and empowerment of independent remediation manager",
      "Plan to reduce use-of-force incidents and in-custody deaths",
      "Address chronic staffing/absenteeism and post-coverage failures",
      "Reform timeline tied to Borough-Based Jails closure of Rikers",
      "Direct court reporting bypassing mayoral chain of command"
    ],
    "recent_status": "December 2025 order detailed the manager's sweeping powers; Nicholas Deml named January 2026; implementation orders expected through 2026-2027.",
    "expected_resolution": "Receivership implementation orders 2026-2027",
    "links": [
      {"label": "THE CITY: Federal Judge Orders Appointment of Rikers 'Remediation Manager'", "url": "https://www.thecity.nyc/2025/05/13/federal-judge-rikers-oversight-remediation-manager/"},
      {"label": "Queens Daily Eagle: Judge details sweeping powers of receiver", "url": "https://queenseagle.com/all/2025/12/22/judge-details-sweeping-powers-of-receiver-set-to-run-rikers"},
      {"label": "Prison Legal News: Now Under Federal Receivership", "url": "https://www.prisonlegalnews.org/news/2025/aug/1/now-under-federal-receivership-new-york-citys-rikers-island-jails-still-have-no-plan-improve-no-firm-date-close/"}
    ]
  },
  {
    "id": "dw-doe-evaluations",
    "case_name": "D.W. v. New York City Department of Education",
    "citation": "23-cv-3179 (S.D.N.Y.)",
    "year_filed": 2023,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "S.D.N.Y.",
    "plaintiffs": "Students with disabilities and parents (Mobilization for Justice and Simpson Thacher & Bartlett LLP)",
    "summary": "Class action alleging the NYC Department of Education systematically fails to provide timely initial and reevaluation assessments under the IDEA, leaving thousands of students without legally required services. In May 2025, Judge Edgardo Ramos denied DOE's motion to dismiss in substantial part.",
    "daily_effects": "Relief sought would force DOE to meet statutory evaluation timelines, build psychologist/social worker capacity, and create monitoring/reporting on overdue evaluations. A decree here would likely require DOE to hire and retain hundreds of evaluators and overhaul referral triage. Families would gain enforceable timelines rather than years of waiting.",
    "monitor": null,
    "key_obligations": [
      "Compliance with IDEA 60-day evaluation timeline",
      "Hiring/retention plan for school psychologists and related-service providers",
      "Public reporting on overdue evaluations",
      "Compensatory services for students harmed by delays",
      "Independent monitoring of evaluation completion rates"
    ],
    "recent_status": "Motion to dismiss denied May 27, 2025; case proceeding to class certification and merits.",
    "expected_resolution": "Class certification briefing 2026; settlement talks possible 2026-2027",
    "links": [
      {"label": "Mobilization for Justice: Court Denies NYCDOE's Motion to Dismiss", "url": "https://mobilizationforjustice.org/news-and-press/court-denies-nycdoes-motion-to-dismiss-class-action-targeting-systemic-failure-to-provide-timely-special-education-evaluations/"},
      {"label": "Simpson Thacher: SDNY denies motion to dismiss", "url": "https://www.stblaw.com/about-us/news/view/2025/06/09/mobilization-for-justice-and-simpson-thacher-secure-victory-with-sdny-denying-nycdoe-s-motion-to-dismiss-class-action-targeting-systemic-failure-to-provide-timely-special-education-evaluations"},
      {"label": "Complaint (D.W. v. NYCDOE)", "url": "http://mobilizationforjustice.org/wp-content/uploads/DW-v-NYCDOE-23-cv-3179.pdf"}
    ]
  },
  {
    "id": "lv-doe-enforcement",
    "case_name": "L.V. v. NYC DOE — enforcement of 2023 reform order",
    "citation": "03-cv-9917 (S.D.N.Y.)",
    "year_filed": 2003,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of parents who won IDEA due-process orders (Advocates for Children and Milbank LLP)",
    "summary": "A July 2025 monitor report found DOE had implemented only 21 of 51 reforms imposed under Judge Loretta Preska's 2023 order to fix DOE's broken hearing-order implementation system, setting up renewed enforcement and likely contempt or modified-decree proceedings.",
    "daily_effects": "Enforcement relief could include a court-ordered Vendor Pilot expansion, hard deadlines for paying providers and tuition awards, and financial sanctions. Families with winning hearing orders would see faster payment, fewer broken promises, and a working tracking system. A formal contempt order could push direct judicial control over DOE's Implementation Unit.",
    "monitor": "Special Master overseeing 2023 implementation order",
    "key_obligations": [
      "Full implementation of 51-step reform order",
      "Functioning Implementation Unit with case tracking",
      "Timely payment of providers and tuition reimbursements",
      "Vendor Pilot expansion",
      "Public compliance reporting"
    ],
    "recent_status": "July 2025 monitor report flagged majority non-compliance; further enforcement orders anticipated in 2026.",
    "expected_resolution": "Modified enforcement decree or contempt findings 2026",
    "links": [
      {"label": "Chalkbeat: NYC Ed Dept. out of compliance with federal court order", "url": "https://www.chalkbeat.org/newyork/2025/08/05/nyc-special-education-federal-court-order-lv-compliance/"},
      {"label": "Advocates for Children: L.V. case page", "url": "https://advocatesforchildren.org/case/l-v-v-nyc-department-of-education/"},
      {"label": "February 2025 court order", "url": "https://www.nysd.uscourts.gov/sites/default/files/2025-02/03cv9917%20LV%20v%20NYC%20DOE%20Order%202.20.25.pdf"}
    ]
  },
  {
    "id": "acs-coercive-home-searches",
    "case_name": "Gould v. City of New York (ACS coercive home-search class action)",
    "citation": "1:24-cv-01263 (E.D.N.Y., filed Feb. 20, 2024)",
    "year_filed": 2024,
    "year_entered": null,
    "status": "pending",
    "agencies": ["ACS"],
    "issue_area": "Child Welfare",
    "court": "E.D.N.Y.",
    "plaintiffs": "Nine named parents and proposed class (Emery Celli Brinckerhoff Abady Ward & Maazel, Family Justice Law Center, Paul Weiss, NYU Family Defense Clinic)",
    "summary": "Class action alleging ACS conducts widespread warrantless, coercive home searches of families under investigation in violation of the Fourth Amendment. Companion Bronx Defenders/Arnold & Porter suits target racial discrimination in ACS investigations and newborn separations.",
    "daily_effects": "Relief sought would require ACS to inform parents of their right to refuse consent and to call counsel before entering homes — a 'Miranda for families' regime — and to overhaul investigator training and supervision. Tens of thousands of yearly ACS home visits would shift from de facto compelled entry to genuine consent-based encounters, with contemporaneous documentation of consent.",
    "monitor": null,
    "key_obligations": [
      "Written notice-of-rights to parents before any home search",
      "Training and supervisory changes for ACS field staff",
      "Documentation/tracking of consent and refusals",
      "Bar on retaliation for refusing entry",
      "Independent monitor over investigatory practices"
    ],
    "recent_status": "Discovery proceeding 2025-2026; parallel Bronx Defenders/Arnold & Porter racial-discrimination suits filed October 2025 may be consolidated.",
    "expected_resolution": "Class certification 2026; settlement talks possible 2026-2027",
    "links": [
      {"label": "ECBAWM press release", "url": "https://ecbawm.com/news/class-action-challenges-nyc-acs-widespread-coercive-tactics-to-conduct-invasive-and-unlawful-home-searches/"},
      {"label": "Gothamist: NYC child welfare investigators coerce families, suit claims", "url": "https://gothamist.com/news/nyc-child-welfare-investigators-coerce-traumatize-families-class-action-lawsuit-claims"},
      {"label": "Bronx Defenders: ACS racial-discrimination suit", "url": "https://www.bronxdefenders.org/the-bronx-defenders-and-arnold-porter-sue-acs-to-stop-its-reign-of-terror-against-new-yorks-most-marginalized-families/"}
    ]
  },
  {
    "id": "nypd-gang-database",
    "case_name": "Challenge to NYPD Gang Database",
    "citation": "E.D.N.Y. (filed Apr. 30, 2025)",
    "year_filed": 2025,
    "year_entered": null,
    "status": "pending",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "E.D.N.Y.",
    "plaintiffs": "Black and Latino New Yorkers listed on the database (NAACP LDF, Legal Aid, Bronx Defenders, LatinoJustice PRLDEF, Ballard Spahr)",
    "summary": "Federal class action alleging the NYPD's Criminal Group Database (commonly the 'gang database') is built and used in violation of the First, Fourth, and Fourteenth Amendments and city law. Plaintiffs note Black and Latino people comprise 99% of those listed.",
    "daily_effects": "Plaintiffs seek injunctive relief to halt new additions, audit and purge existing entries, require notice and a removal process, and end information-sharing with prosecutors, ICE, and schools. If granted, the database (with tens of thousands of names) could be substantially dismantled or operated under court oversight. The Mamdani administration has signaled openness to reform.",
    "monitor": null,
    "key_obligations": [
      "Cease additions absent particularized evidence",
      "Notice and challenge procedure for listed individuals",
      "Audit and purge of existing entries",
      "End information-sharing with ICE and other agencies",
      "Independent oversight and public reporting"
    ],
    "recent_status": "Judge Brian M. Cogan denied the City's motion to dismiss in December 2025 but also denied class certification at the same time, limiting the case to the three named lead plaintiffs (with putative class allegations still in play); plaintiffs continue discovery.",
    "expected_resolution": "Settlement talks possible 2026-2027",
    "links": [
      {"label": "NAACP LDF: Plaintiffs Defeat City's Motion to Dismiss", "url": "https://www.naacpldf.org/press-release/plaintiffs-defeat-citys-motion-to-dismiss-in-litigation-challenging-the-nypds-unconstitutional-gang-database/"},
      {"label": "NAACP LDF case page", "url": "https://www.naacpldf.org/case-issue/nypd-gang-database-policing-tactics/"},
      {"label": "THE CITY: How NYPD slow-walked gang database reforms", "url": "https://www.thecity.nyc/2026/04/28/nypd-gang-database-reforms-mamdani-jessica-tisch/"}
    ]
  },
  {
    "id": "nypd-vehicle-stops",
    "case_name": "NAACP NY State Conference v. City of New York ('Stop-and-Frisk on Wheels')",
    "citation": "S.D.N.Y. (filed Jan. 26, 2026)",
    "year_filed": 2026,
    "year_entered": null,
    "status": "pending",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "NAACP NY State Conference and two Black drivers (NYCLU, Bronx Defenders, NAACP, Milbank LLP)",
    "summary": "Class action alleging NYPD vehicle-search practices unlawfully target Black and Latino drivers. The complaint cites an 83% spike in traffic searches in 2024 and data that over 84% of searches from 2022-2025 were of Black or Latino drivers, with 96% turning up no weapons.",
    "daily_effects": "Plaintiffs seek a court-ordered overhaul of vehicle-search policies, training, supervision, and data reporting — analogous to the Floyd monitorship. A decree would likely require new consent rules, body-camera disclosure for searches, and an independent monitor. Hundreds of thousands of annual traffic stops would be subject to new constraints.",
    "monitor": null,
    "key_obligations": [
      "Policy and training overhaul on vehicle-search standards",
      "Supervisory review of consent searches",
      "Public reporting of stop and search data by race",
      "Body-camera retention/disclosure for searches",
      "Independent monitor"
    ],
    "recent_status": "Newly filed in early 2026; motion-to-dismiss briefing expected in 2026.",
    "expected_resolution": "Motion to dismiss briefing 2026; trial or settlement 2027+",
    "links": [
      {"label": "NYCLU: Stop-and-Frisk on Wheels", "url": "https://www.nyclu.org/press-release/stop-and-frisk-on-wheels-nyclu-naacp-the-bronx-defenders-sue-nypd-for-illegal-racial-profiling-searches-of-nyc-drivers"},
      {"label": "Queens Daily Eagle: 'Stop-and-frisk on wheels'", "url": "https://queenseagle.com/all/2026/1/30/nypd-vehicle-stops-are-stop-and-frisk-on-wheels-says-new-lawsuit"},
      {"label": "Gothamist coverage", "url": "https://gothamist.com/news/stop-and-frisk-on-wheels-nypd-targeted-black-and-latino-drivers-for-searches-lawsuit-claims"}
    ]
  },
  {
    "id": "doc-phone-surveillance",
    "case_name": "Matter of Reid v. New York City Department of Correction (phone surveillance)",
    "citation": "Article 78 / class action (N.Y. Sup. Ct., Bronx County, filed Apr. 15, 2024)",
    "year_filed": 2024,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOC"],
    "issue_area": "Surveillance",
    "court": "N.Y. Sup. Ct., Bronx County",
    "plaintiffs": "Incarcerated New Yorkers and their attorneys (Bronx Defenders, Brooklyn Defender Services, New York County Defender Services, Cleary Gottlieb)",
    "summary": "Class action alleging DOC recorded and shared thousands of confidential attorney-client phone calls with prosecutors and law enforcement, and conducted mass surveillance of all calls placed on the jail phone system. Plaintiffs allege Sixth Amendment, statutory, and ethical violations.",
    "daily_effects": "Relief sought would force DOC to stop recording attorney-client calls, purge improperly retained recordings, and overhaul the Securus-operated phone system. A decree would likely impose technical safeguards (privileged-number registry), audit requirements, and remedies for past disclosures to prosecutors. Tens of thousands of detainees and their lawyers would gain protected legal communications.",
    "monitor": null,
    "key_obligations": [
      "End recording of attorney-client calls",
      "Purge improperly retained recordings",
      "Technical privileged-number safeguards",
      "Restrictions on sharing call data with prosecutors/law enforcement",
      "Independent audit and reporting"
    ],
    "recent_status": "Pending in S.D.N.Y.; coordinated with City Council Intro proposing a warrant requirement for jail calls.",
    "expected_resolution": "Motion practice and possible class certification 2026",
    "links": [
      {"label": "Bronx Defenders press release", "url": "https://www.bronxdefenders.org/nyc-public-defenders-file-class-action-lawsuit-against-the-department-of-correction-over-unlawful-mass-surveillance-system/"},
      {"label": "Queens Daily Eagle coverage", "url": "https://queenseagle.com/all/2024/4/21/doc-sued-for-alleged-mass-surveillance-practices"}
    ]
  },
  {
    "id": "competency-restoration-delays",
    "case_name": "Class action challenging delays in competency restoration treatment",
    "citation": "S.D.N.Y. (filed Aug. 13, 2025)",
    "year_filed": 2025,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOHMH", "DOC"],
    "issue_area": "Mental Health",
    "court": "S.D.N.Y.",
    "plaintiffs": "Incarcerated people found unfit to stand trial (Legal Aid Society and Washington Square Legal Services)",
    "summary": "Class action against NYS Office of Mental Health, NYC DOHMH, and NYC Health + Hospitals over systemic failure to transfer people on Rikers found unfit to stand trial to inpatient psychiatric treatment within statutory deadlines. Median waits hit 81 days in the past year with some over 9 months.",
    "daily_effects": "Relief sought would force expanded inpatient capacity and a court-enforced transfer-timeline cap. About 114 people on any given day are stuck on Rikers awaiting transfer; relief would unblock that pipeline and reduce psychiatric deaths in jail (about half of the 59 in-custody deaths since 2021 involved psychiatric need). A decree could compel construction or contracting of new beds.",
    "monitor": null,
    "key_obligations": [
      "Statutory transfer-deadline compliance",
      "Expansion of inpatient psychiatric capacity",
      "Tracking and public reporting of waitlists",
      "Provision of treatment on Rikers pending transfer",
      "Independent monitoring"
    ],
    "recent_status": "Recently filed August 2025; initial motion practice expected in 2026.",
    "expected_resolution": "Motion to dismiss briefing 2026; settlement plausible given parallel Rikers receivership pressure",
    "links": [
      {"label": "THE CITY: Rikers Detainees Denied Mental Health Care", "url": "https://www.thecity.nyc/2025/08/12/rikers-mental-health-care-730-competency/"},
      {"label": "Queens Daily Eagle: Indefinite legal limbo", "url": "https://queenseagle.com/all/2025/8/14/indefinite-legal-limbo-state-sued-for-failing-to-treat-those-found-unfit-for-trial"}
    ]
  },
  {
    "id": "encampment-sweeps",
    "case_name": "Doe v. City of New York (homeless encampment sweeps)",
    "citation": "S.D.N.Y. (filed Oct. 29, 2024)",
    "year_filed": 2024,
    "year_entered": null,
    "status": "pending",
    "agencies": ["NYPD", "DSNY", "DHS"],
    "issue_area": "Homelessness",
    "court": "S.D.N.Y.",
    "plaintiffs": "Six unhoused New Yorkers seeking class certification (Urban Justice Center Safety Net Project)",
    "summary": "Federal civil rights class action alleging the city's encampment-sweep program violates the Fourth Amendment by seizing and destroying unhoused people's property without notice or process and ignoring the city's own 48-hour notice and 90-day storage policies. Defendants include NYC, NYPD, DSNY, and DHS.",
    "daily_effects": "Plaintiffs seek an injunction halting sweeps that don't follow internal policy, plus property-storage and notice requirements. With the Mamdani administration restarting sweeps in early 2026 at 11 sites, a court order would constrain how sweeps are conducted citywide. Relief could mirror West Coast Martin v. Boise-style limits.",
    "monitor": null,
    "key_obligations": [
      "Enforce 48-hour notice before sweeps",
      "Safe storage of personal property for 90 days",
      "Documentation and inventory of seized items",
      "Shelter/services offer before clearing",
      "Independent monitoring of sweep protocols"
    ],
    "recent_status": "Pending in S.D.N.Y.; heightened salience after Mamdani administration restarted sweeps February 2026.",
    "expected_resolution": "Preliminary injunction or settlement talks 2026",
    "links": [
      {"label": "National Homelessness Law Center case page", "url": "https://homelesslaw.org/adamslawsuit/"},
      {"label": "THE CITY: Lawsuit claims sweeps unconstitutional", "url": "https://www.thecity.nyc/2024/10/30/homeless-encampment-sweeps-unconstitution-lawsuit/"},
      {"label": "Gothamist: Mamdani restarts sweeps", "url": "https://gothamist.com/news/mamdani-administration-restarts-homeless-encampment-sweeps-at-11-nyc-sites"}
    ]
  },
  {
    "id": "nypd-domain-awareness",
    "case_name": "Residents v. City of New York (NYPD Domain Awareness System surveillance)",
    "citation": "1:25-cv-08903 (S.D.N.Y., filed Oct. 27, 2025)",
    "year_filed": 2025,
    "year_entered": null,
    "status": "pending",
    "agencies": ["NYPD"],
    "issue_area": "Surveillance",
    "court": "S.D.N.Y.",
    "plaintiffs": "NYC residents under direct NYPD camera surveillance (Emery Celli Brinckerhoff Abady Ward & Maazel and Surveillance Technology Oversight Project)",
    "summary": "Federal civil rights suit alleging the NYPD's Domain Awareness System (tens of thousands of cameras, license-plate readers, and analytics tools built with Microsoft) conducts unconstitutional mass surveillance, including cameras pointed directly into private residences. Related FOIL litigation produced 2,700 documents in November 2025 showing facial-recognition use against protesters.",
    "daily_effects": "Relief sought would impose limits on retention, sharing, and analytic use of DAS data; mandate POST Act disclosures; and require removal of cameras improperly trained on private spaces. A decree would constrain how NYC's largest urban-surveillance network is used and could trigger purges of facial-recognition matches and retained footage.",
    "monitor": null,
    "key_obligations": [
      "Limits on retention of footage and analytic outputs",
      "Restrictions on facial recognition against political activity",
      "Camera-siting rules to protect residential privacy",
      "POST Act-compliant Impact and Use disclosures",
      "Independent oversight of inter-agency data sharing"
    ],
    "recent_status": "Recently filed; complementary FOIL litigation has produced records that bolster the merits.",
    "expected_resolution": "Motion to dismiss briefing 2026",
    "links": [
      {"label": "ECBAWM press release", "url": "https://ecbawm.com/news/ecbawm-s-t-o-p-sue-nypd-for-domain-awareness-surveillance-system-which-illegally-collects-surveillance-data-on-every-new-yorker/"},
      {"label": "The Intercept: NYPD camera into bedroom", "url": "https://theintercept.com/2025/10/28/nypd-camera-mass-surveillance-lawsuit/"}
    ]
  },
  {
    "id": "callahan-migrant-transfers",
    "case_name": "Migrant shelter transfer claims under Callahan v. Carey",
    "citation": "Index No. 42582/79 (N.Y. Sup. Ct., N.Y. County)",
    "year_filed": 2024,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DHS", "HRA"],
    "issue_area": "Homelessness",
    "court": "N.Y. Sup. Ct., N.Y. County",
    "plaintiffs": "Migrant shelter residents transferred from hotel shelters (Legal Aid Society and Coalition for the Homeless)",
    "summary": "Following the March 2024 Callahan stipulation giving NYC more flexibility on adult migrant shelter stays, Legal Aid has filed at least 14 individual enforcement actions in 2024-2025 over abrupt hotel-shelter transfers alleged to violate the consent decree. These cases test the scope and enforceability of the modified right to shelter.",
    "daily_effects": "A consolidated ruling or stipulated remedy would clarify the city's obligations on notice, alternative placement, and conditions for re-shelter denials for tens of thousands of migrant adults. Likely relief includes minimum notice periods, accommodations review before transfer, and tracking of denied reapplications. Determines whether right to shelter has teeth or has effectively been hollowed out for newcomers.",
    "monitor": "Coalition for the Homeless (under 2024 stipulation)",
    "key_obligations": [
      "Compliance with 2024 Callahan stipulation transfer rules",
      "Notice and alternative-placement protocols",
      "Accommodations and vulnerability review before transfer",
      "Weekly census reporting",
      "Standards for re-sheltering denials"
    ],
    "recent_status": "Multiple individual enforcement matters pending in NY County Supreme Court; 2026 expected to bring trial or negotiated resolution.",
    "expected_resolution": "Negotiated resolution or trial in 2026",
    "links": [
      {"label": "Legal Aid: Deal to Preserve Right to Shelter", "url": "https://legalaidnyc.org/news/deal-preserve-new-york-city-right-to-shelter-laws/"},
      {"label": "City Limits: NYC narrows re-sheltering rights", "url": "https://citylimits.org/nyc-narrows-re-sheltering-rights-for-recently-arrived-immigrants/"}
    ]
  },
  {
    "id": "council-v-adams-rikers-ice",
    "case_name": "New York City Council v. Adams (Rikers ICE executive order)",
    "citation": "N.Y. Sup. Ct., N.Y. County (filed Apr. 15, 2025)",
    "year_filed": 2025,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOC", "NYPD"],
    "issue_area": "Immigration/Sanctuary",
    "court": "N.Y. Sup. Ct., N.Y. County",
    "plaintiffs": "New York City Council (Speaker Adrienne Adams) and civil rights amici",
    "summary": "State court action challenging First Deputy Mayor Mastro's executive order inviting ICE to set up an office on Rikers, alleging the order violated NYC's 2014 sanctuary laws. The court issued multiple rulings against the city, with a September 2025 final ruling blocking the office.",
    "daily_effects": "A final decree would entrench NYC's 2014 ICE-on-Rikers prohibition against executive evasion and clarify which officials can issue sanctuary-related executive orders. DOC would be barred from facilitating ICE presence in city jails. Given the Trump administration's parallel sanctuary-cities suit against NYC, this case sets precedent for how local sanctuary protections will be enforced.",
    "monitor": null,
    "key_obligations": [
      "Permanent bar on ICE office at Rikers under 2014 laws",
      "Limits on executive orders contradicting Council legislation",
      "Disclosure of city/federal coordination on detainer requests",
      "Compliance reporting on sanctuary law adherence"
    ],
    "recent_status": "Justice Mary V. Rosado issued the final ruling blocking the executive order on September 8, 2025; possible appeal and continued enforcement litigation through 2026.",
    "expected_resolution": "Appeal proceedings 2026; final injunction",
    "links": [
      {"label": "NYC Council press release", "url": "https://council.nyc.gov/news/2025/04/15/new-york-city-council-files-lawsuit-to-stop-mayor-adams-illegal-executive-order-inviting-president-trumps-ice-into-rikers-to-set-up-office-seeking-courts-immediate-halt-of/"},
      {"label": "NYC Council: Final ruling blocking ICE office", "url": "https://council.nyc.gov/press/2025/09/16/2976/"},
      {"label": "THE CITY coverage", "url": "https://www.thecity.nyc/2025/04/15/council-eric-adams-lawsuit-rikers-ice/"}
    ]
  },
  {
    "id": "cidny-curb-ramps",
    "case_name": "Center for Independence of the Disabled, NY v. City of New York (pedestrian ramp monitoring)",
    "citation": "14-cv-5884 (S.D.N.Y.)",
    "year_filed": 2014,
    "year_entered": 2019,
    "status": "pending",
    "agencies": ["DOT"],
    "issue_area": "Disability Rights",
    "court": "S.D.N.Y.",
    "plaintiffs": "Center for Independence of the Disabled NY, Brooklyn Center for Independence of the Disabled, and class of disabled pedestrians (Disability Rights Advocates)",
    "summary": "Ongoing court-supervised implementation of the 2019 settlement that requires NYC to install or upgrade ~108,600 noncompliant pedestrian ramps by 2034 under an outside monitor. Periodic enforcement motions and modifications continue and are likely to produce additional court orders as midpoint deadlines approach.",
    "daily_effects": "Court oversight continues to push DOT to accelerate ramp surveying and construction across all 162,000 NYC corners; enforcement actions over the next 2-3 years will determine whether the city is meeting interim milestones. Each milestone order can require additional crews, contractor changes, or interim accessibility measures.",
    "monitor": "Court-appointed independent monitor (per 2019 settlement)",
    "key_obligations": [
      "Survey and upgrade ~108,600 ramps by 2034",
      "Annual benchmarks and reporting to monitor",
      "ADA compliance on all new and resurfaced corners",
      "Coordination with utility/streetscape work"
    ],
    "recent_status": "Settlement in active implementation under court monitor; enforcement motions and decree modifications likely 2026-2028.",
    "expected_resolution": "Periodic enforcement orders through 2034",
    "links": [
      {"label": "DRA: Judge Approves Settlement", "url": "https://dralegal.org/press/judge-approves-settlement-that-dramatically-improves-accessibility-of-new-york-citys-sidewalks/"},
      {"label": "CIDNY Curb Cut Case page", "url": "https://www.cidny.org/litigation-updates/curb-cut-case/"},
      {"label": "THE CITY: 162,000 corners settlement", "url": "https://www.thecity.nyc/2019/07/23/city-promises-wheelchair-ramps-on-every-corner/"}
    ]
  },
  {
    "id": "mccain-v-koch",
    "case_name": "McCain v. Koch",
    "citation": "Index No. 41023/1983 (N.Y. Sup. Ct., N.Y. County)",
    "year_filed": 1983,
    "year_entered": 1986,
    "year_terminated": 2008,
    "status": "historical",
    "agencies": ["DHS", "HRA"],
    "issue_area": "Homelessness",
    "court": "N.Y. Sup. Ct.",
    "plaintiffs": "Yvonne McCain and class of homeless families with children (Legal Aid Society)",
    "summary": "Class action establishing that homeless families with children in New York City have a legal right to emergency shelter. The 1986 Appellate Division ruling and ensuing interim orders required the City to provide families with safe, sanitary shelter rather than warehousing them in welfare hotels or overnight offices.",
    "daily_effects": "For 25 years the case generated dozens of court orders dictating intake procedures, shelter conditions, and the prohibition on turning families away. It forced creation of the PATH intake center, written placement standards, and minimum shelter habitability rules that DHS still uses. It produced the underlying architecture of the modern family shelter system.",
    "monitor": null,
    "key_obligations": [
      "Provide emergency shelter to every eligible homeless family with children",
      "Maintain shelters meeting minimum safety and sanitation standards",
      "Prohibit overnight placements in offices or non-shelter spaces",
      "Provide notice and review procedures for eligibility denials"
    ],
    "legacy": "The 2008 Boston v. City of New York stipulation superseded McCain with a permanent, enforceable family-shelter agreement; DHS's intake, placement, and habitability rules are direct descendants of the McCain orders even though McCain itself is closed.",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse: McCain v. Koch", "url": "https://clearinghouse.net/case/11073/"},
      {"label": "Legal Aid Society case page", "url": "https://legalaidnyc.org/court-case/mccain-v-koch/"},
      {"label": "Coalition for the Homeless: Remembering Yvonne McCain", "url": "https://www.coalitionforthehomeless.org/remembering-yvonne-mccain-a-true-hero-for-homeless-new-yorkers/"}
    ]
  },
  {
    "id": "aspira-consent-decree",
    "case_name": "ASPIRA of New York v. Board of Education",
    "citation": "72 Civ. 4002 (S.D.N.Y.)",
    "year_filed": 1972,
    "year_entered": 1974,
    "year_terminated": null,
    "status": "historical",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "S.D.N.Y.",
    "plaintiffs": "ASPIRA of New York, ASPIRA of America, and class of Puerto Rican and other Hispanic public-school children and parents",
    "summary": "Consent decree signed August 29, 1974 by Judge Marvin Frankel requiring the NYC Board of Education to provide transitional bilingual education and English-as-a-Second-Language instruction to Spanish-dominant students with limited English proficiency. It was the first systemwide court-ordered bilingual education program in the United States.",
    "daily_effects": "The decree forced the system to identify limited-English-proficient students through home-language surveys, hire qualified bilingual teachers, purchase Spanish-language materials, and deliver subject-matter instruction in Spanish while English skills developed. The infrastructure it built — the LAB test era, bilingual program units, and parent-notification rules — defined New York City's English-Language-Learner regime for decades.",
    "monitor": null,
    "key_obligations": [
      "Identify all Spanish-dominant LEP students through standardized assessment",
      "Provide intensive English-as-a-Second-Language instruction",
      "Deliver subject-area instruction in Spanish until proficiency is achieved",
      "Hire and certify a sufficient corps of bilingual teachers",
      "Purchase Spanish-language instructional materials"
    ],
    "legacy": "Although active court enforcement has long since wound down, the city's current ELL program structure, parent-notification requirements, and bilingual-program entitlement framework all descend directly from the ASPIRA decree; New York State's CR Part 154 regulations codify many of its principles.",
    "links": [
      {"label": "ERIC: Consent Decree text (1974)", "url": "https://eric.ed.gov/?id=ED117285"},
      {"label": "NYC Municipal Archives ASPIRA collection", "url": "https://a860-collectionguides.nyc.gov/repositories/2/archival_objects/646907"}
    ]
  },
  {
    "id": "wilder-v-bernstein",
    "case_name": "Wilder v. Bernstein",
    "citation": "73-cv-02644 (S.D.N.Y.)",
    "year_filed": 1973,
    "year_entered": 1986,
    "year_terminated": 1999,
    "status": "historical",
    "agencies": ["ACS"],
    "issue_area": "Child Welfare",
    "court": "S.D.N.Y.",
    "plaintiffs": "Shirley Wilder and class of Black Protestant children in NYC foster care (NYCLU)",
    "summary": "Long-running class action alleging the City's reliance on religiously affiliated foster care agencies racially segregated foster children, with Black Protestant children steered to inferior public facilities while Catholic and Jewish children received better-resourced placements. The Wilder Decree (signed 1984, approved 1986, affirmed 1988) imposed a randomized referral system designed to allocate children without regard to race or religion.",
    "daily_effects": "The decree forced predecessor agencies of ACS to implement an equity-based intake and referral process across the City's contracted foster-care network and to monitor outcomes by race and religion. It permanently changed the public-sectarian contracting model and required sectarian agencies that took City funds to serve children of any background.",
    "monitor": "Special Child Welfare Advisory Panel established under the decree",
    "key_obligations": [
      "Use a race- and religion-neutral system to refer children to foster care agencies",
      "Require contracted sectarian agencies to accept children of any background",
      "Provide equivalent services across all contracted agencies",
      "Submit data on placements by race and religion"
    ],
    "legacy": "ACS's nondiscriminatory placement rules, its contract terms with voluntary foster care agencies, and the requirement that public dollars not subsidize religiously segregated care all trace to Wilder; the modern ACS quality-assurance and disparity-monitoring functions grew out of the decree's data-reporting regime.",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse: Wilder v. Bernstein", "url": "https://clearinghouse.net/case/12417/"},
      {"label": "Wilder v. Bernstein, 725 F. Supp. 1324 (S.D.N.Y. 1989)", "url": "https://law.justia.com/cases/federal/district-courts/FSupp/725/1324/1407230/"}
    ]
  },
  {
    "id": "marisol-acs",
    "case_name": "Marisol A. v. Giuliani",
    "citation": "95-cv-10533 (S.D.N.Y.)",
    "year_filed": 1995,
    "year_entered": 1999,
    "year_terminated": 2018,
    "status": "historical",
    "agencies": ["ACS"],
    "issue_area": "Child Welfare",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of children in custody of, or at risk of abuse/neglect reported to, the City's Child Welfare Administration",
    "summary": "Class action alleging systemic failures in the City's child-protective and foster-care systems, filed in the wake of the Elisa Izquierdo killing. The 1999 settlement created the Special Child Welfare Advisory Panel to oversee a multi-year reform program, replacing direct judicial supervision with expert monitoring.",
    "daily_effects": "The settlement helped institutionalize the newly created Administration for Children's Services as an independent agency, drove the move toward neighborhood-based services, created data systems for tracking case outcomes, and built ACS's quality-assurance and accountability review (ChildStat) functions. The Advisory Panel's recommendations shaped agency policy long after the case closed.",
    "monitor": "Special Child Welfare Advisory Panel (Marcia Robinson Lowry, Douglas Nelson, David Tobis and others)",
    "key_obligations": [
      "Implement reforms recommended by the Special Child Welfare Advisory Panel",
      "Improve investigation, placement, and permanency-planning practices",
      "Collect and publish outcome data on children in care",
      "Improve preventive services to reduce foster-care entries",
      "Develop neighborhood-based service models"
    ],
    "legacy": "ACS's status as a freestanding agency, its ChildStat and accountability-review practice, its outcome-data publication, and its neighborhood-based contracting model all bear the direct imprint of Marisol; the court relinquished jurisdiction over the city settlement on August 6, 2018, formally closing the case.",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse: Marisol A. v. Giuliani", "url": "https://clearinghouse.net/case/5/"},
      {"label": "National Center for Youth Law case page", "url": "https://youthlaw.org/case/marisol-v-giuliani/"}
    ]
  },
  {
    "id": "sheppard-v-phoenix",
    "case_name": "Sheppard v. Phoenix",
    "citation": "91-cv-04148 (S.D.N.Y.)",
    "year_filed": 1991,
    "year_entered": 1995,
    "year_terminated": 2002,
    "status": "historical",
    "agencies": ["DOC"],
    "issue_area": "Jails/Corrections",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of detainees confined in the Central Punitive Segregation Unit at Rikers Island (Legal Aid Society Prisoners' Rights Project)",
    "summary": "Class action challenging the use of force and conditions of confinement in the Central Punitive Segregation Unit (CPSU), the high-security punitive housing unit at Rikers. The consent decree imposed limits on staff use of force, mandated documentation and review, and required staffing and supervision reforms in the unit.",
    "daily_effects": "During the decree's life, the CPSU saw a sustained reduction in both frequency and severity of force used against people held there, with new use-of-force reporting, review boards, and training. The decree built the documentary and supervisory infrastructure that DOC later expanded across other units and that monitors in subsequent cases (notably Nunez) used as a starting point.",
    "monitor": "Plaintiffs' counsel (Legal Aid Society) with court-supervised reporting",
    "key_obligations": [
      "Limit use of force in the Central Punitive Segregation Unit",
      "Document and review every use-of-force incident",
      "Train and supervise officers assigned to punitive segregation",
      "Provide medical attention and discipline standards for incidents"
    ],
    "legacy": "The decree's use-of-force reporting and review architecture in punitive segregation became the template for DOC-wide use-of-force directives later folded into the Nunez monitorship, and it informed the Board of Correction's modern restrictive-housing rules.",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse: Sheppard v. Phoenix", "url": "https://www.clearinghouse.net/detail.php?id=849"},
      {"label": "Sheppard v. Phoenix, 210 F. Supp. 2d 450 (S.D.N.Y. 2002)", "url": "https://law.justia.com/cases/federal/district-courts/FSupp2/210/450/2579618/"}
    ]
  },
  {
    "id": "handschu-1985",
    "case_name": "Handschu v. Special Services Division (1985 Decree)",
    "citation": "71-cv-2203 (S.D.N.Y.)",
    "year_filed": 1971,
    "year_entered": 1985,
    "year_terminated": 2003,
    "status": "historical",
    "agencies": ["NYPD"],
    "issue_area": "Surveillance",
    "court": "S.D.N.Y.",
    "plaintiffs": "Barbara Handschu and class of political activists surveilled by the NYPD Bureau of Special Services (the 'Red Squad')",
    "summary": "The original 1985 Handschu Consent Decree settled more than a decade of litigation over NYPD political surveillance. It barred investigations of political activity except through the Intelligence Division and only under written guidelines requiring specific articulable factual predicates and prior authorization from a three-member Handschu Authority.",
    "daily_effects": "For nearly two decades the 1985 framework constrained how NYPD opened, supervised, and documented investigations touching political and religious activity, and it created the Handschu Authority as a quasi-judicial internal check. The original framework was substantially relaxed in 2003 (the modified Handschu Guidelines) and then revised again under the 2017 Raza/Handschu settlement.",
    "monitor": "Handschu Authority (and, after 2017, a court-appointed civilian representative)",
    "key_obligations": [
      "Restrict political-activity investigations to the Intelligence Division",
      "Require specific articulable factual predicate before opening an investigation",
      "Obtain prior authorization from the Handschu Authority",
      "Maintain written guidelines governing techniques and duration"
    ],
    "legacy": "Although the 1985 decree was superseded by the 2003 modification and the 2017 settlement, today's Intelligence Bureau investigative guidelines, the Handschu Authority, and the civilian representative role are direct descendants of the 1985 framework; the case docket remains open but the original 1985 regime is no longer in force.",
    "links": [
      {"label": "Wikipedia: Handschu agreement", "url": "https://en.wikipedia.org/wiki/Handschu_agreement"},
      {"label": "NYC Municipal Archives: The Handschu Collection", "url": "https://www.archives.nyc/blog/2024/8/23/the-handschu-collection"}
    ]
  },
  {
    "id": "forts-v-ward",
    "case_name": "Forts v. Ward",
    "citation": "75 Civ. 2826 (S.D.N.Y.)",
    "year_filed": 1975,
    "year_entered": 1978,
    "year_terminated": null,
    "status": "historical",
    "agencies": ["DOC"],
    "issue_area": "Jails/Corrections",
    "court": "S.D.N.Y.",
    "plaintiffs": "Women incarcerated at Bedford Hills (and related NYC litigation at Rose M. Singer Center)",
    "summary": "Litigation over the privacy rights of incarcerated women subjected to viewing by male officers while undressed or using toilets and showers. The Second Circuit's 1980 ruling (621 F.2d 1210) and accompanying decrees required restrictions on male-officer assignments to sleeping and bathing areas, balanced against the officers' employment rights.",
    "daily_effects": "The case set the framework still used by New York correctional agencies — including DOC's women's facilities — for scheduling cross-gender supervision, posting privacy screens, requiring announcement before entry, and limiting strip-search authority to same-gender staff. It shaped the operating procedures of the Rose M. Singer Center on Rikers Island.",
    "monitor": null,
    "key_obligations": [
      "Restrict male-officer assignments in sleeping and bathing areas of women's units",
      "Provide privacy screens and announcement protocols",
      "Limit strip searches to same-gender staff except in emergencies",
      "Balance privacy protections with equal employment opportunity"
    ],
    "legacy": "DOC's current female-housing post orders, privacy protections, and same-gender search rules at Rose M. Singer descend from Forts; the Prison Rape Elimination Act standards later codified much of the framework Forts pioneered.",
    "links": [
      {"label": "Forts v. Ward, 621 F.2d 1210 (2d Cir. 1980)", "url": "https://law.justia.com/cases/federal/appellate-courts/F2/621/1210/154055/"},
      {"label": "Forts v. Ward, 471 F. Supp. 1095 (S.D.N.Y. 1978)", "url": "https://law.justia.com/cases/federal/district-courts/FSupp/471/1095/1430167/"}
    ]
  },
  {
    "id": "sharif-v-nysed",
    "case_name": "Sharif v. New York State Education Department",
    "citation": "88 Civ. 8435 (S.D.N.Y.)",
    "year_filed": 1988,
    "year_entered": 1989,
    "year_terminated": 1989,
    "status": "historical",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "S.D.N.Y.",
    "plaintiffs": "Ten New York City female high school students and organizational plaintiffs (ACLU Women's Rights Project)",
    "summary": "Title IX and Equal Protection challenge to New York State's exclusive reliance on SAT scores to award Regents and Empire State Scholarships, which systematically disadvantaged female applicants who earned higher grades but lower SAT scores than male peers. Judge John Walker enjoined the SAT-only system in February 1989.",
    "daily_effects": "The injunction forced the State Education Department to redesign its scholarship-eligibility formula to combine high-school grades with standardized test scores, immediately reallocating thousands of awards to New York City female students. It became a national precedent cited against single-test scholarship and admissions criteria.",
    "monitor": null,
    "key_obligations": [
      "Cease using SAT scores as sole criterion for Regents and Empire scholarships",
      "Adopt a formula combining high-school grades and test scores",
      "Reissue scholarships under the new formula"
    ],
    "legacy": "New York State's current Scholarship for Academic Excellence formula, which weights GPA alongside Regents exam scores, derives directly from the Sharif remedy; the case remains a foundational Title IX precedent constraining test-only awards.",
    "links": [
      {"label": "Sharif by Salahuddin v. NYSED, 709 F. Supp. 345 (S.D.N.Y. 1989)", "url": "https://law.justia.com/cases/federal/district-courts/FSupp/709/345/1586898/"}
    ]
  },
  {
    "id": "klostermann-v-cuomo",
    "case_name": "Klostermann v. Cuomo",
    "citation": "61 N.Y.2d 525 (1984)",
    "year_filed": 1982,
    "year_entered": 1984,
    "year_terminated": null,
    "status": "historical",
    "agencies": ["DHS", "DOHMH"],
    "issue_area": "Mental Health",
    "court": "N.Y. Ct. App.",
    "plaintiffs": "John Klostermann, Joanne S., and class of mentally ill people discharged from or held in state psychiatric hospitals without adequate community placement",
    "summary": "New York Court of Appeals decision holding that courts have jurisdiction to enforce the rights of homeless mentally ill people to community placement and discharge planning, rejecting the State's argument that resource-allocation challenges were nonjusticiable. The ruling cleared the way for settlements requiring supportive housing and aftercare for about 6,000 former state psychiatric patients then homeless on New York City streets.",
    "daily_effects": "Klostermann established that courts could compel the State and City to plan discharges and fund supportive housing, driving creation of New York/New York I (1990) and the supportive-housing pipeline used by DHS and city-state OMH partnerships today. It changed how psychiatric centers must discharge patients into the City.",
    "monitor": null,
    "key_obligations": [
      "Provide discharge planning to mentally ill patients leaving state hospitals",
      "Develop supportive housing capacity in the community",
      "Coordinate State and City responsibilities for aftercare",
      "Make rights judicially enforceable despite resource constraints"
    ],
    "legacy": "The New York/New York supportive-housing agreements (I, II, III, and IV) — the backbone of the City's response to mental-illness homelessness — trace their political and legal origins to Klostermann.",
    "links": [
      {"label": "Klostermann v. Cuomo, 61 N.Y.2d 525 (1984)", "url": "https://law.justia.com/cases/new-york/court-of-appeals/1984/64-n-y-2d-525-0.html"},
      {"label": "Coalition for the Homeless: Other Legal Victories", "url": "https://www.coalitionforthehomeless.org/our-programs/advocacy/legal-victories/other-coalition-for-the-homeless-legal-victories/"}
    ]
  },
  {
    "id": "rothenberg-v-daus",
    "case_name": "Rothenberg v. Daus",
    "citation": "08 Civ. 567 (S.D.N.Y.)",
    "year_filed": 2008,
    "year_entered": 2013,
    "year_terminated": 2015,
    "status": "historical",
    "agencies": ["TLC"],
    "issue_area": "Employment Discrimination",
    "court": "S.D.N.Y.",
    "plaintiffs": "Class of NYC taxicab drivers whose hack licenses were summarily revoked by TLC after off-duty arrests or drug-test failures",
    "summary": "Federal class action challenging the TLC's practice of automatically revoking taxi drivers' licenses based on off-duty conduct without notice, hearing, or any showing that passengers had been endangered. The settlement required the TLC to provide pre-revocation due process and to limit summary revocation to cases of demonstrated passenger-safety risk.",
    "daily_effects": "The decree forced the TLC to overhaul its driver-discipline procedures, creating a hearing structure for licensees facing revocation and narrowing the agency's summary-suspension power. It is the foundation of the modern TLC OATH hearing process for license actions.",
    "monitor": null,
    "key_obligations": [
      "Provide notice and pre-revocation hearings to drivers facing license loss",
      "Limit summary revocation to documented passenger-safety threats",
      "Reinstate eligibility for drivers revoked without due process",
      "Revise TLC rules to conform to constitutional due process"
    ],
    "legacy": "The TLC's current adjudicatory rules governing fitness hearings — under which license actions are heard at OATH with notice, evidence, and appeal — descend from the Rothenberg settlement.",
    "links": [
      {"label": "Daniel Ackman case page: Rothenberg v. Daus", "url": "https://www.danackmanlaw.com/rothenberg-v-daus-08-civ-00567-shs-sdny"}
    ]
  },
  {
    "id": "taxis-for-all-v-tlc",
    "case_name": "Taxis For All Campaign v. NYC Taxi and Limousine Commission",
    "citation": "11-cv-00237 (S.D.N.Y.)",
    "year_filed": 2011,
    "year_entered": 2014,
    "year_terminated": 2024,
    "status": "historical",
    "agencies": ["TLC"],
    "issue_area": "Disability Rights",
    "court": "S.D.N.Y.",
    "plaintiffs": "Taxis For All Campaign, United Spinal Association, Disabled in Action, and individual wheelchair users (Disability Rights Advocates)",
    "summary": "ADA class action seeking accessible yellow taxi service in New York City. The 2014 settlement required the TLC to ensure that 50% of the yellow-taxi fleet is wheelchair-accessible by 2020 and to establish a dispatch system for accessible vehicles.",
    "daily_effects": "The decree drove the rollout of the Accessible Dispatch program citywide and the gradual transition of the yellow fleet toward wheelchair-accessible vehicles, with detailed annual benchmarks and reporting. It produced the regulatory baseline that subsequently extended to for-hire vehicles.",
    "monitor": "Court-supervised compliance reporting; Disability Rights Advocates as plaintiffs' counsel",
    "key_obligations": [
      "Reach 50% wheelchair-accessible yellow-taxi fleet by 2020",
      "Operate a centralized Accessible Dispatch system citywide",
      "Train drivers on accessibility and securement",
      "Report progress to the court and the plaintiffs"
    ],
    "legacy": "NYC's Accessible Dispatch system, the medallion-accessibility requirements written into TLC rules, and the parallel for-hire-vehicle accessibility framework all derive from this settlement.",
    "links": [
      {"label": "Disability Rights Advocates: Taxis For All v. TLC", "url": "https://dralegal.org/case/taxis-for-all-campaign-v-taxi-and-limousine-commission-et-al-tlc/"}
    ]
  },
  {
    "id": "us-v-boe-nvra",
    "case_name": "United States v. New York City Board of Elections (NVRA enforcement)",
    "citation": "93 Civ. 7693 (S.D.N.Y.)",
    "year_filed": 1993,
    "year_entered": 1995,
    "year_terminated": 2000,
    "status": "historical",
    "agencies": ["BOE"],
    "issue_area": "Public Benefits",
    "court": "S.D.N.Y.",
    "plaintiffs": "United States Department of Justice (Voting Section) enforcing the National Voter Registration Act",
    "summary": "Enforcement action against New York City and State to compel compliance with the 1993 National Voter Registration Act ('Motor Voter'), which required state agencies — including DMV, public-assistance offices, and disability-services offices — to offer voter registration. The resulting decree built the City and State's NVRA agency-registration infrastructure.",
    "daily_effects": "The decree forced HRA, DMV, and other agencies serving New York City residents to offer voter-registration forms at every covered transaction, to train staff, and to transmit completed forms to the Board of Elections within statutory deadlines. It established the agency-based registration pipeline that still produces a substantial share of City voter registrations.",
    "monitor": "DOJ Voting Section oversight",
    "key_obligations": [
      "Offer voter registration at DMV and public-assistance transactions",
      "Train agency staff on NVRA duties",
      "Transmit completed registrations to BOE within statutory deadlines",
      "Report on compliance to DOJ"
    ],
    "legacy": "NYC and New York State agency voter-registration practices — including the forms HRA hands out at SNAP and cash-assistance recertifications — are direct products of this NVRA enforcement era.",
    "links": [
      {"label": "DOJ Voting Section: NVRA Cases", "url": "https://www.justice.gov/crt/national-voter-registration-act-1993-nvra"}
    ]
  },
  {
    "id": "goldberg-v-kelly",
    "case_name": "Goldberg v. Kelly",
    "citation": "397 U.S. 254 (1970)",
    "year_filed": 1968,
    "year_entered": 1970,
    "status": "scotus",
    "agencies": ["HRA"],
    "issue_area": "Public Benefits",
    "court": "U.S. Supreme Court",
    "plaintiffs": "John Kelly and other NYC residents receiving AFDC and New York State Home Relief whose benefits were terminated without a prior hearing, suing NYC Commissioner of Social Services Jack R. Goldberg",
    "summary": "NYC welfare recipients challenged the city's practice of terminating public assistance benefits without a pre-termination evidentiary hearing. The Supreme Court held that the Due Process Clause requires an evidentiary hearing before the government may terminate welfare benefits, because such benefits are a statutory entitlement and termination causes grievous loss.",
    "daily_effects": "HRA must offer recipients timely written notice, the right to appear in person, the right to confront adverse witnesses, the right to counsel, and an impartial decision-maker before cutting off cash assistance, SNAP, or Medicaid. These 'Goldberg hearings' (now called Fair Hearings administered by the state OTDA) remain the backbone of NYC benefits administration, and HRA cannot stop a check based on a caseworker's determination alone.",
    "monitor": null,
    "key_obligations": [
      "Provide timely and adequate written notice of the reasons for proposed termination",
      "Afford recipients an opportunity to be heard in person before termination",
      "Permit confrontation and cross-examination of adverse witnesses",
      "Allow representation by retained counsel",
      "Issue a written decision by an impartial decisionmaker stating reasons and evidence relied on"
    ],
    "holding": "The Due Process Clause requires that welfare recipients be afforded an evidentiary hearing before termination of benefits.",
    "vote": "5-3",
    "justice_authoring": "William J. Brennan Jr.",
    "legacy": "Goldberg created the modern 'new property' doctrine and remains the foundation for every fair-hearing right HRA, NYCHA, and the city's Medicaid program must honor. It is cited daily in NYC administrative law practice.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/397/254/"},
      {"label": "Cornell LII", "url": "https://www.law.cornell.edu/supremecourt/text/397/254"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1969/62"}
    ]
  },
  {
    "id": "penn-central-v-nyc",
    "case_name": "Penn Central Transportation Co. v. City of New York",
    "citation": "438 U.S. 104 (1978)",
    "year_filed": 1969, "year_entered": 1978, "status": "scotus",
    "agencies": ["NYC Landmarks Preservation Commission", "DCP"],
    "issue_area": "Land Use / Takings", "court": "U.S. Supreme Court",
    "plaintiffs": "Penn Central Transportation Company, owner of Grand Central Terminal, after NYC's Landmarks Preservation Commission rejected its plans to build a 55-story office tower above the terminal",
    "summary": "After the Landmarks Commission rejected two proposals to construct a high-rise above Grand Central, Penn Central sued claiming the 1965 Landmarks Law worked an unconstitutional taking. The Court held that landmark designation was not a taking, articulating the now-standard three-factor ad hoc test (economic impact, interference with investment-backed expectations, character of the government action).",
    "daily_effects": "The Landmarks Preservation Commission can designate individual buildings, interiors, and historic districts and prohibit alterations or demolitions, with transferable development rights as a constitutional safety valve. Owners of designated properties must apply for Certificates of Appropriateness for exterior work, and the city today protects more than 38,000 landmarked properties because of the rule this case validated.",
    "monitor": null,
    "key_obligations": [
      "Landmark regulation does not require compensation when it leaves a reasonable beneficial use",
      "Cities may transfer development rights to adjacent parcels as compensation",
      "Regulatory takings claims require a fact-specific, multi-factor inquiry",
      "Owners retain the right to seek Certificates of Appropriateness for alterations",
      "Designations must serve a substantial public purpose"
    ],
    "holding": "NYC's Landmarks Preservation Law, as applied to Grand Central Terminal, did not effect a taking requiring just compensation.",
    "vote": "6-3", "justice_authoring": "William J. Brennan Jr.",
    "legacy": "Penn Central is the constitutional foundation of the entire NYC landmarks regime and the most-cited regulatory takings case in American law. Every Landmarks Commission designation, every TDR transaction in Midtown, and every preservation fight in the city operates under this framework.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/438/104/"},
      {"label": "Cornell LII", "url": "https://www.law.cornell.edu/supremecourt/text/438/104"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1977/77-444"},
      {"label": "NYC Landmarks Preservation Commission", "url": "https://www.nyc.gov/site/lpc/index.page"}
    ]
  },
  {
    "id": "monell-v-dss",
    "case_name": "Monell v. Department of Social Services of the City of New York",
    "citation": "436 U.S. 658 (1978)",
    "year_filed": 1971, "year_entered": 1978, "status": "scotus",
    "agencies": ["HRA", "DOE"], "issue_area": "Civil Rights", "court": "U.S. Supreme Court",
    "plaintiffs": "Jane Monell and a class of female NYC Department of Social Services and Board of Education employees forced to take unpaid maternity leaves before medically necessary",
    "summary": "Female NYC employees sued under 42 U.S.C. § 1983 challenging compelled unpaid pregnancy leave. The Court overruled Monroe v. Pape's holding that municipalities are not 'persons' under § 1983 and held that local governments may be sued directly under § 1983 for constitutional violations caused by official policy or custom.",
    "daily_effects": "NYC and every NYC agency can be sued directly for damages in federal court when an official policy, custom, or practice causes a constitutional injury. 'Monell claims' against the city are the legal foundation for every major NYC civil-rights case (Floyd, Nunez, Handschu, wrongful-conviction settlements). The city's Law Department defends and settles Monell claims constantly.",
    "monitor": null,
    "key_obligations": [
      "Municipalities are 'persons' suable under 42 U.S.C. § 1983",
      "Liability attaches only for constitutional violations caused by official policy or custom",
      "No respondeat superior liability for individual employee torts alone",
      "Policy may be established by lawmakers, policymakers, or persistent custom",
      "Failure to train can constitute policy where it amounts to deliberate indifference"
    ],
    "holding": "Local governments are 'persons' subject to suit under 42 U.S.C. § 1983 when the alleged constitutional violation results from an official policy or custom.",
    "vote": "7-2", "justice_authoring": "William J. Brennan Jr.",
    "legacy": "Monell, born in NYC's Board of Education and Department of Social Services, created the entire field of municipal civil-rights liability nationwide and is the doctrinal engine behind every major NYC consent decree, settlement, and federal civil-rights judgment of the past half century.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/436/658/"},
      {"label": "Cornell LII", "url": "https://www.law.cornell.edu/supremecourt/text/436/658"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1977/75-1914"}
    ]
  },
  {
    "id": "nyc-transit-v-beazer",
    "case_name": "New York City Transit Authority v. Beazer",
    "citation": "440 U.S. 568 (1979)",
    "year_filed": 1976, "year_entered": 1979, "status": "scotus",
    "agencies": ["NYC Transit Authority"], "issue_area": "Employment Discrimination", "court": "U.S. Supreme Court",
    "plaintiffs": "Carl Beazer and other methadone-maintenance patients denied employment by the NYC Transit Authority under its blanket rule excluding users of narcotics including methadone",
    "summary": "Methadone users challenged the Transit Authority's blanket employment ban as a violation of Title VII (disparate impact on Black and Hispanic applicants) and the Equal Protection Clause. The Supreme Court reversed the Second Circuit and upheld the policy, finding the rule was rationally related to legitimate safety and efficiency concerns.",
    "daily_effects": "The Transit Authority retained broad latitude to set medical and drug-related employment standards for safety-sensitive transit work, and the decision validated bright-line drug rules used by NYC transit, sanitation, and uniformed agencies for decades. Subsequent ADA and state human-rights amendments narrowed the practical reach but the constitutional baseline remains.",
    "monitor": null,
    "key_obligations": [
      "Public employers may impose employment exclusions rationally related to safety",
      "Disparate-impact plaintiffs must show statistically meaningful adverse effect on a protected class",
      "Generalized public-safety rationales receive deference under rational-basis review",
      "Employment policies need not be the least restrictive alternative"
    ],
    "holding": "The Transit Authority's exclusion of methadone users does not violate Title VII or the Equal Protection Clause.",
    "vote": "6-3", "justice_authoring": "John Paul Stevens",
    "legacy": "Beazer remains the leading case on the constitutionality of categorical medical-fitness rules for municipal employment and is cited whenever NYC agencies defend bright-line hiring standards for uniformed positions.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/440/568/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1978/77-1427"}
    ]
  },
  {
    "id": "caban-v-mohammed",
    "case_name": "Caban v. Mohammed",
    "citation": "441 U.S. 380 (1979)",
    "year_filed": 1976, "year_entered": 1979, "status": "scotus",
    "agencies": ["ACS"], "issue_area": "Child Welfare", "court": "U.S. Supreme Court",
    "plaintiffs": "Abdiel Caban, an unwed father in New York whose children were adopted by their mother's new husband under a New York statute that required only the mother's consent",
    "summary": "Caban challenged § 111 of the New York Domestic Relations Law, which permitted adoption over an unwed father's objection while requiring an unwed mother's consent. The Court struck down the statute as gender discrimination violating the Equal Protection Clause where the father had a substantial relationship with the children.",
    "daily_effects": "NYC Family Court and ACS must give unwed fathers who have established a relationship with their children the same notice and consent rights as mothers in adoption and termination-of-parental-rights proceedings. ACS adoption units developed putative-father registries and notice procedures following the decision.",
    "monitor": null,
    "key_obligations": [
      "Provide unwed fathers with a relationship to their children the same consent rights as mothers in adoption",
      "Apply heightened scrutiny to gender-based distinctions in family law",
      "Maintain procedures to identify and notify putative fathers",
      "Equalize notice in termination-of-parental-rights proceedings"
    ],
    "holding": "New York's statute giving unwed mothers but not unwed fathers a veto over adoption of their children violates the Equal Protection Clause.",
    "vote": "5-4", "justice_authoring": "Lewis F. Powell Jr.",
    "legacy": "Caban reshaped NYC Family Court practice and ACS adoption protocols and remains a cornerstone of unwed-father jurisprudence cited in nearly every contested NYC adoption involving an unmarried biological parent.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/441/380/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1978/77-6431"}
    ]
  },
  {
    "id": "payton-v-new-york",
    "case_name": "Payton v. New York",
    "citation": "445 U.S. 573 (1980)",
    "year_filed": 1970, "year_entered": 1980, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "Theodore Payton and Obie Riddick, arrested by NYPD officers who entered their Bronx and Queens homes without warrants under a New York statute authorizing warrantless felony arrests in the home",
    "summary": "NYPD officers entered Payton's apartment without a warrant to arrest him for murder, and separately entered Riddick's home without a warrant. The Court struck down the New York statute, holding that the Fourth Amendment prohibits warrantless and nonconsensual entry into a suspect's home to make a routine felony arrest absent exigent circumstances.",
    "daily_effects": "NYPD officers must obtain an arrest warrant (or have valid exigent circumstances or consent) before entering a private residence to arrest a suspect. The rule reshaped patrol and detective protocols citywide and is the constitutional baseline for every warrantless-entry suppression motion in NYC.",
    "monitor": null,
    "key_obligations": [
      "Obtain an arrest warrant before non-exigent entry into a suspect's home",
      "Document exigent circumstances when warrantless entry is necessary",
      "Obtain valid consent before entering a third party's home (later Steagald)",
      "Treat the threshold of the home as the constitutional bright line",
      "Provide training on warrant requirements to all patrol officers"
    ],
    "holding": "The Fourth Amendment prohibits the police from making a warrantless and nonconsensual entry into a suspect's home to make a routine felony arrest.",
    "vote": "6-3", "justice_authoring": "John Paul Stevens",
    "legacy": "Payton is one of the most operationally consequential Fourth Amendment decisions for NYPD and changed the way home arrests are made in the five boroughs. It is invoked in suppression hearings throughout NYC criminal court daily.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/445/573/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1979/78-5420"}
    ]
  },
  {
    "id": "new-york-v-belton",
    "case_name": "New York v. Belton",
    "citation": "453 U.S. 454 (1981)",
    "year_filed": 1978, "year_entered": 1981, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "State of New York appealing the suppression of cocaine found by a state trooper in a jacket pocket inside a car after arresting Roger Belton",
    "summary": "The Court created a bright-line rule that when a police officer makes a lawful custodial arrest of a vehicle occupant, the officer may search the passenger compartment and any containers found there as a contemporaneous incident of arrest. The decision dramatically expanded vehicle search authority for two decades.",
    "daily_effects": "For 28 years NYPD officers routinely searched the passenger compartments and containers of vehicles after any custodial arrest. The rule was sharply narrowed in 2009 by Arizona v. Gant, which now governs NYPD vehicle searches incident to arrest in the five boroughs, though Belton's basic framework survives.",
    "monitor": null,
    "key_obligations": [
      "Officers may search the passenger compartment of a vehicle incident to lawful arrest of an occupant",
      "Containers within the passenger compartment may be opened during such searches",
      "Bright-line rule (until Gant) applied regardless of whether arrestee retained access to the vehicle",
      "Trunk searches require separate justification",
      "Lawfulness depends on the arrest being valid"
    ],
    "holding": "When a police officer makes a lawful custodial arrest of an occupant of an automobile, the officer may search the passenger compartment as a contemporaneous incident of arrest.",
    "vote": "6-3", "justice_authoring": "Potter Stewart",
    "legacy": "Belton remains the doctrinal anchor for NYPD vehicle searches, though Arizona v. Gant (2009) limited the operational scope to circumstances where the arrestee can still reach the vehicle or police have reason to believe it contains evidence of the offense of arrest.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/453/454/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1980/80-328"}
    ]
  },
  {
    "id": "loretto-v-teleprompter",
    "case_name": "Loretto v. Teleprompter Manhattan CATV Corp.",
    "citation": "458 U.S. 419 (1982)",
    "year_filed": 1976, "year_entered": 1982, "status": "scotus",
    "agencies": ["DoITT", "DCWP"], "issue_area": "Land Use / Takings", "court": "U.S. Supreme Court",
    "plaintiffs": "Jean Loretto, owner of a Manhattan apartment building on which Teleprompter installed cable equipment pursuant to a New York law prohibiting landlords from interfering with cable installation",
    "summary": "A New York law authorized cable operators to install equipment on apartment buildings and barred landlords from charging more than a nominal fee. The Court held that any permanent physical occupation of property authorized by government, however minor, constitutes a per se taking requiring just compensation.",
    "daily_effects": "NYC agencies that authorize permanent physical occupation of private property (cable, telecom equipment, small-cell wireless, etc.) must provide compensation. The rule shapes how the city structures utility and cable installations on private buildings citywide.",
    "monitor": null,
    "key_obligations": [
      "Any permanent physical occupation of private property is a per se taking",
      "Triviality of the occupation does not defeat the takings claim",
      "Just compensation must be paid even for de minimis physical invasions",
      "Temporary access regulations are evaluated under different (Penn Central) standard",
      "State and city statutes authorizing private occupation must provide compensation mechanism"
    ],
    "holding": "A permanent physical occupation of private property authorized by government is a per se taking requiring just compensation, regardless of the public interest it serves or the size of the occupation.",
    "vote": "6-3", "justice_authoring": "Thurgood Marshall",
    "legacy": "Loretto, born in a Manhattan apartment-building dispute, established the per-se physical-takings rule that constrains NYC's authority to mandate physical installations on private property. Invoked in every modern small-cell wireless siting and cable-franchise dispute in the city.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/458/419/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1981/81-244"}
    ]
  },
  {
    "id": "new-york-v-ferber",
    "case_name": "New York v. Ferber",
    "citation": "458 U.S. 747 (1982)",
    "year_filed": 1978, "year_entered": 1982, "status": "scotus",
    "agencies": ["NYPD", "Manhattan DA"], "issue_area": "Free Speech", "court": "U.S. Supreme Court",
    "plaintiffs": "State of New York appealing the reversal of Paul Ferber's Manhattan conviction under a New York statute criminalizing the promotion of sexual performances by children under 16",
    "summary": "Ferber, the owner of a Manhattan bookstore, was prosecuted under NY Penal Law § 263.15 for selling films depicting underage boys. The Court upheld the statute, holding that child pornography is a category of speech outside First Amendment protection and that states may ban its production, distribution, and sale without satisfying the Miller obscenity test.",
    "daily_effects": "NYPD's Vice Enforcement and Special Victims units and NYC borough DAs may prosecute production, distribution, and possession of child sexual abuse material under New York Penal Law without proving it meets the Miller obscenity test. The decision is the foundation of NYC's child-exploitation enforcement.",
    "monitor": null,
    "key_obligations": [
      "Child sexual abuse material is unprotected speech",
      "Statutes need not require obscenity findings to be constitutional",
      "Production and distribution may both be criminalized",
      "Material involving real minors falls outside First Amendment protection",
      "Strict scienter requirements still apply to defendants"
    ],
    "holding": "States may prohibit the distribution of material depicting children engaged in sexual conduct without violating the First Amendment, even if the material is not legally obscene.",
    "vote": "9-0", "justice_authoring": "Byron R. White",
    "legacy": "Ferber, originating in a Manhattan prosecution, established the nationwide constitutional framework for child-exploitation enforcement and remains the legal foundation of every NYPD and DA prosecution of CSAM in New York City.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/458/747/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1981/81-55"}
    ]
  },
  {
    "id": "new-york-v-quarles",
    "case_name": "New York v. Quarles",
    "citation": "467 U.S. 649 (1984)",
    "year_filed": 1980, "year_entered": 1984, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "State of New York appealing the suppression of statements and a firearm obtained after NYPD officers in a Queens supermarket asked Benjamin Quarles 'where is the gun?' before reading him Miranda warnings",
    "summary": "After chasing Quarles into an A&P in Queens and finding an empty shoulder holster, an NYPD officer asked where the gun was before any Miranda warnings; Quarles gestured to a carton. The Court created the 'public safety exception' to Miranda, holding that officers may question a suspect without warnings when there is an objectively reasonable need to protect police or the public from immediate danger.",
    "daily_effects": "NYPD patrol officers may ask limited, narrowly tailored questions about weapons or imminent threats before administering Miranda warnings, and the answers and derivative physical evidence are admissible at trial. The exception is invoked in NYC firearms arrests, terrorism investigations, and active-shooter situations.",
    "monitor": null,
    "key_obligations": [
      "Officers may question suspects without Miranda warnings when public safety is at immediate risk",
      "Questions must be objectively reasonable as necessary to neutralize the threat",
      "Statements and derivative physical evidence are admissible",
      "Exception is narrow and ends once the safety threat is contained",
      "Standard scope of post-Miranda interrogation resumes thereafter"
    ],
    "holding": "Overriding considerations of public safety justify an officer's failure to provide Miranda warnings before asking questions necessary to secure his own safety or the safety of the public.",
    "vote": "5-4", "justice_authoring": "William H. Rehnquist",
    "legacy": "The Quarles public-safety exception is invoked by NYPD detectives in firearms cases and was famously cited by federal authorities to question the Boston Marathon bomber. It remains a routine fixture of NYC firearms-arrest interrogations.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/467/649/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1983/82-1213"}
    ]
  },
  {
    "id": "new-york-v-class",
    "case_name": "New York v. Class",
    "citation": "475 U.S. 106 (1986)",
    "year_filed": 1981, "year_entered": 1986, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "State of New York appealing the suppression of a gun found by NYPD officers who reached into a car to clear papers off the dashboard to read the VIN",
    "summary": "After stopping Class for traffic violations in the Bronx, an NYPD officer opened the car door and reached in to move papers obscuring the VIN, exposing a handgun under the driver's seat. The Court held the limited VIN-area intrusion did not violate the Fourth Amendment because there is no reasonable expectation of privacy in a VIN federal law requires to be visible from outside the vehicle.",
    "daily_effects": "NYPD officers conducting traffic stops may reach into a vehicle's passenger compartment to view the VIN when it is obscured from outside, and any contraband in plain view during that limited intrusion is admissible. The rule shapes NYPD vehicle-stop protocol.",
    "monitor": null,
    "key_obligations": [
      "No reasonable expectation of privacy exists in a vehicle's VIN",
      "Officers may make limited intrusion into a vehicle to view a hidden VIN",
      "Plain-view evidence observed during the VIN inspection is admissible",
      "Intrusion must be narrowly tailored to viewing the VIN",
      "Traffic stop must be lawful in the first instance"
    ],
    "holding": "A police officer's reaching into a passenger compartment to move papers obscuring the VIN does not violate the Fourth Amendment.",
    "vote": "7-2", "justice_authoring": "Sandra Day O'Connor",
    "legacy": "Class remains the controlling authority for NYPD VIN inspections during vehicle stops and is routinely cited in NYC traffic-stop suppression motions.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/475/106/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1985/84-1181"}
    ]
  },
  {
    "id": "new-york-v-burger",
    "case_name": "New York v. Burger",
    "citation": "482 U.S. 691 (1987)",
    "year_filed": 1982, "year_entered": 1987, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "State of New York appealing suppression of stolen vehicles and parts seized by NYPD officers during a warrantless administrative inspection of a Brooklyn auto junkyard",
    "summary": "NYPD's auto-crimes division conducted a warrantless inspection of a Brooklyn vehicle-dismantling yard and found stolen vehicles. The Court held the warrantless administrative inspection scheme constitutional because the junkyard industry is closely regulated, the inspections served a substantial state interest, and the statute provided an adequate substitute for a warrant.",
    "daily_effects": "NYPD and DCWP can conduct warrantless administrative inspections of closely regulated NYC businesses (junkyards, pawn shops, scrap-metal dealers, certain liquor establishments). Inspectors may seize evidence of criminality found during a proper administrative inspection.",
    "monitor": null,
    "key_obligations": [
      "Warrantless administrative inspections of closely regulated industries are permissible",
      "The regulatory scheme must serve a substantial government interest",
      "Inspections must be necessary to further the regulatory scheme",
      "The statute must limit the discretion of inspecting officers in time, place, and scope",
      "Evidence of crime discovered during proper inspection may be seized"
    ],
    "holding": "A warrantless inspection of a vehicle-dismantling business pursuant to a closely-regulated-industry statute does not violate the Fourth Amendment.",
    "vote": "6-3", "justice_authoring": "Harry Blackmun",
    "legacy": "Burger is the foundational authority for NYPD and city administrative inspections of regulated trades and is routinely cited whenever NYC inspectors enter pawn shops, scrap dealers, or other closely-regulated businesses without a warrant.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/482/691/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1986/86-80"}
    ]
  },
  {
    "id": "nys-club-assn-v-nyc",
    "case_name": "New York State Club Association v. City of New York",
    "citation": "487 U.S. 1 (1988)",
    "year_filed": 1984, "year_entered": 1988, "status": "scotus",
    "agencies": ["NYC Commission on Human Rights"], "issue_area": "Civil Rights", "court": "U.S. Supreme Court",
    "plaintiffs": "New York State Club Association challenging NYC Local Law 63 (1984), which extended the city's public-accommodations anti-discrimination ban to large private clubs with more than 400 members",
    "summary": "The Club Association argued the ordinance violated members' First Amendment freedom of association and was unconstitutionally vague. The Court unanimously upheld the law, holding the city's interest in eradicating discrimination justified the modest burden on associational rights.",
    "daily_effects": "The NYC Commission on Human Rights enforces the public-accommodations ban against large private clubs (University, Century, Knickerbocker, NY Athletic Club, etc.) opening membership and event attendance to women and people of color. The decision underwrites all subsequent NYC Human Rights Law expansion into private memberships.",
    "monitor": null,
    "key_obligations": [
      "Anti-discrimination laws may reach large private clubs that function as places of business",
      "Facial First Amendment challenges to anti-discrimination laws face high bar",
      "Membership thresholds (400+) plus commercial activity remove 'distinctly private' status",
      "Cities may define public accommodations broadly within state authority",
      "Vagueness challenges fail where the ordinance gives reasonable notice of covered conduct"
    ],
    "holding": "NYC Local Law 63 extending the public-accommodations anti-discrimination law to large private clubs does not on its face violate the First Amendment or the Due Process Clause.",
    "vote": "9-0", "justice_authoring": "Byron R. White",
    "legacy": "The decision desegregated NYC's elite private clubs and remains the constitutional backbone of NYC Human Rights Law enforcement against large private membership organizations.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/487/1/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1987/86-1836"}
    ]
  },
  {
    "id": "new-york-v-harris",
    "case_name": "New York v. Harris",
    "citation": "495 U.S. 14 (1990)",
    "year_filed": 1984, "year_entered": 1990, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "State of New York appealing suppression of a Mirandized stationhouse confession by Bernard Harris, arrested in his Manhattan apartment by NYPD without a warrant in violation of Payton",
    "summary": "NYPD entered Harris's home without a warrant in violation of Payton, then took a confession at the stationhouse after Miranda warnings. The Court held that, where police have probable cause, a stationhouse statement following a Payton violation is not subject to suppression because Payton protects the home, not statements made elsewhere after the suspect is in lawful custody.",
    "daily_effects": "NYPD warrantless home entries that violate Payton still expose the agency to civil liability and home-found evidence remains suppressed, but a subsequent stationhouse confession after Miranda warnings is admissible at trial.",
    "monitor": null,
    "key_obligations": [
      "Payton suppresses evidence found inside the home during a warrantless arrest",
      "Stationhouse statements made after Miranda warnings are not subject to Payton suppression",
      "Probable cause to arrest must precede any home entry",
      "NYPD remains liable under § 1983 for Payton violations",
      "Custody following lawful probable cause is not 'unlawful' for derivative-evidence purposes"
    ],
    "holding": "Where police have probable cause to arrest, a stationhouse statement taken after Miranda warnings need not be suppressed even though it followed a Payton violation in the home.",
    "vote": "5-4", "justice_authoring": "Byron R. White",
    "legacy": "Harris together with Payton shaped a generation of NYPD home-arrest practice and remains a daily fixture of NYC criminal motion practice on suppression of post-arrest statements.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/495/14/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1989/88-1000"}
    ]
  },
  {
    "id": "florence-v-burlington",
    "case_name": "Florence v. Board of Chosen Freeholders of County of Burlington",
    "citation": "566 U.S. 318 (2012)",
    "year_filed": 2005, "year_entered": 2012, "status": "scotus",
    "agencies": ["DOC"], "issue_area": "Jails/Corrections", "court": "U.S. Supreme Court",
    "plaintiffs": "Albert Florence, a New Jersey resident strip-searched at two county jails after a wrongful warrant arrest (NJ case, included for direct NYC operational consequence)",
    "summary": "Florence sued after being strip-searched on intake at two NJ jails for a minor offense. The Court held that jail officials may conduct suspicionless visual strip searches of all arrestees admitted to general population, regardless of offense severity, deferring to correctional officials' safety judgments.",
    "daily_effects": "DOC may continue suspicionless strip searches of all detainees being admitted to general population at Rikers and other city jails, including those arrested on minor offenses. The decision overturned more protective lower-court rules; New York State and city policy and Nunez monitoring impose additional restrictions but the constitutional floor is set by Florence.",
    "monitor": null,
    "key_obligations": [
      "Jails may conduct visual strip searches of all general-population admittees without individualized suspicion",
      "Constitutional standard defers heavily to correctional officials",
      "Severity of underlying offense does not change Fourth Amendment analysis",
      "Cavity searches and physical contact remain subject to greater scrutiny",
      "State/local law and consent decrees may impose stricter limits"
    ],
    "holding": "Jail officials may conduct suspicionless visual strip searches of all arrestees admitted to general population without violating the Fourth Amendment.",
    "vote": "5-4", "justice_authoring": "Anthony Kennedy",
    "legacy": "Florence sets the Fourth Amendment floor for DOC intake searches at Rikers and remains the operative authority on strip-search lawsuits arising from NYC jail admissions, though state law and the Nunez federal monitorship add additional protections.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/566/318/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/2011/10-945"}
    ]
  },
  {
    "id": "trump-v-vance",
    "case_name": "Trump v. Vance",
    "citation": "591 U.S. 786 (2020)",
    "year_filed": 2019, "year_entered": 2020, "status": "scotus",
    "agencies": ["Manhattan DA"], "issue_area": "Criminal Procedure", "court": "U.S. Supreme Court",
    "plaintiffs": "President Donald J. Trump challenging a grand jury subpoena issued by Manhattan District Attorney Cyrus Vance Jr. to Trump's accountants for personal and corporate financial records",
    "summary": "The Manhattan DA's grand jury subpoenaed Trump's accounting firm for financial records. The Court rejected Trump's claim of absolute presidential immunity from state criminal process, holding that Article II and the Supremacy Clause do not categorically bar a state grand jury subpoena for a sitting president's personal records.",
    "daily_effects": "The Manhattan DA (and by extension all five NYC borough DAs) retains full authority to use grand jury process to obtain records from sitting federal officials, including the president, subject to ordinary procedural protections. The case enabled the eventual Manhattan prosecution of Trump.",
    "monitor": null,
    "key_obligations": [
      "A sitting president is not categorically immune from state grand jury process",
      "Subpoenas remain subject to ordinary state-law procedural protections",
      "No heightened need standard applies to state grand jury subpoenas",
      "Federal officials may raise subpoena-specific challenges (overbreadth, bad faith)",
      "State criminal investigations may proceed in parallel with federal litigation"
    ],
    "holding": "Article II and the Supremacy Clause do not categorically preclude or require a heightened need standard for issuance of a state criminal subpoena to a sitting president.",
    "vote": "7-2", "justice_authoring": "John G. Roberts Jr.",
    "legacy": "Trump v. Vance cleared the path for the Manhattan DA's investigation of Trump that produced the 2023-2024 indictment and 2024 conviction. It permanently expanded the operational reach of NYC borough DAs in investigating sitting federal officials.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/591/19-635/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/2019/19-635"}
    ]
  },
  {
    "id": "nysrpa-v-bruen",
    "case_name": "New York State Rifle & Pistol Association v. Bruen",
    "citation": "597 U.S. 1 (2022)",
    "year_filed": 2018, "year_entered": 2022, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Second Amendment", "court": "U.S. Supreme Court",
    "plaintiffs": "NY State Rifle & Pistol Association and two individuals denied unrestricted concealed-carry licenses under New York's 1913 Sullivan Law 'proper cause' requirement",
    "summary": "Plaintiffs challenged the New York concealed-carry licensing scheme that required applicants to demonstrate 'proper cause' (a special need for self-protection distinguishable from the general community). The Court struck down the proper-cause standard and announced a new 'text, history, and tradition' test, holding the Second Amendment protects the right to carry a handgun in public for self-defense.",
    "daily_effects": "The NYPD License Division must issue concealed-carry permits to applicants who meet objective criteria (age, training, no disqualifying record) without requiring a showing of special need. Approval volume rose dramatically post-Bruen; New York responded with the Concealed Carry Improvement Act creating 'sensitive locations' where carry remains prohibited, and the NYPD adapted its licensing forms, training requirements, and background-check procedures.",
    "monitor": null,
    "key_obligations": [
      "Issue concealed-carry permits on objective shall-issue criteria",
      "Eliminate 'proper cause' subjective discretion in licensing",
      "Apply text-history-tradition analysis to all NYC firearms regulations",
      "Maintain 'sensitive places' enforcement under CCIA",
      "Provide training, background-check, and character review consistent with shall-issue framework"
    ],
    "holding": "New York's requirement that concealed-carry applicants show 'proper cause' violates the Second and Fourteenth Amendments.",
    "vote": "6-3", "justice_authoring": "Clarence Thomas",
    "legacy": "Bruen transformed NYPD License Division operations and triggered ongoing litigation over the state's Concealed Carry Improvement Act. It is the most operationally consequential firearms ruling for NYC in a century, ending the Sullivan Law's century-old discretionary regime.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/597/20-843/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/2021/20-843"},
      {"label": "NYPD License Division", "url": "https://www.nyc.gov/site/nypd/services/permits/handgun-rifle-shotgun-permits.page"}
    ]
  },
  {
    "id": "williams-v-new-york",
    "case_name": "Williams v. New York",
    "citation": "337 U.S. 241 (1949)",
    "year_filed": 1947, "year_entered": 1949, "status": "scotus",
    "agencies": ["NYC Dept. of Probation"], "issue_area": "Criminal Procedure", "court": "U.S. Supreme Court",
    "plaintiffs": "Samuel Tito Williams, convicted of murder in NYC and sentenced to death by a Kings County judge who relied on a probation officer's pre-sentence report containing information not introduced at trial",
    "summary": "After a Brooklyn jury recommended life, the trial judge imposed a death sentence based on a pre-sentence report containing hearsay about uncharged conduct. The Court upheld the sentencing procedure, holding that a judge at sentencing may consider information from sources not subject to confrontation or cross-examination so long as the procedure is otherwise fair.",
    "daily_effects": "NYC criminal court judges sentencing defendants may consider pre-sentence investigation reports, victim impact statements, and other extra-record information without strict evidentiary safeguards at the sentencing phase. The rule shaped NYC Department of Probation pre-sentence practice and continues to govern non-capital sentencing.",
    "monitor": null,
    "key_obligations": [
      "Sentencing judges may consider information beyond the trial record",
      "Confrontation Clause does not apply with full force at sentencing",
      "Pre-sentence reports may include hearsay and uncharged conduct",
      "Defendants must have opportunity to deny or explain adverse information",
      "Capital sentencing has since been narrowed by later cases"
    ],
    "holding": "The Due Process Clause does not require that information considered by the sentencing judge be subject to confrontation and cross-examination.",
    "vote": "7-2", "justice_authoring": "Hugo L. Black",
    "legacy": "Williams remains the foundation of modern individualized sentencing and shaped NYC Department of Probation's pre-sentence report procedures used in every criminal sentencing in NYC Supreme and Criminal Court.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/337/241/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1948/671"}
    ]
  },

  /* ============ SCOTUS additions (Round 2) ============ */
  {
    "id": "bd-of-estimate-v-morris",
    "case_name": "Board of Estimate of City of New York v. Morris",
    "citation": "489 U.S. 688 (1989)",
    "year_filed": 1981, "year_entered": 1989, "status": "scotus",
    "agencies": ["NYC Board of Estimate", "City Council", "Mayor's Office"],
    "issue_area": "Civil Rights", "court": "U.S. Supreme Court",
    "plaintiffs": "Beverly Morris and other Brooklyn voters",
    "summary": "Brooklyn voters challenged the NYC Board of Estimate — on which each of the five borough presidents cast one vote regardless of population — as violating one person, one vote. The Court unanimously held the Board's structure unconstitutional under the Equal Protection Clause.",
    "daily_effects": "Forced the abolition of the Board of Estimate and triggered the 1989 NYC Charter revision, which transferred the Board's budget, land use, and contracting powers to an expanded City Council and the Mayor. Every ULURP land use decision and most contract approvals now flow through this post-Morris framework.",
    "monitor": null,
    "key_obligations": [
      "Dissolve the Board of Estimate",
      "Redistribute land use, budget, and franchise powers to City Council and Mayor",
      "Restructure NYC government to satisfy one person, one vote"
    ],
    "holding": "NYC's Board of Estimate, by giving each borough equal representation despite vast population differences, violated the Equal Protection Clause's one person, one vote requirement.",
    "vote": "9-0", "justice_authoring": "Byron R. White",
    "legacy": "The most consequential SCOTUS decision ever for NYC governance: it ended a structure that had governed the City since 1898, forced adoption of the 1989 Charter, and created the modern City Council–Mayor balance of power.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/489/688/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1988/87-1022"}
    ]
  },
  {
    "id": "city-of-ny-v-fcc",
    "case_name": "City of New York v. FCC",
    "citation": "486 U.S. 57 (1988)",
    "year_filed": 1985, "year_entered": 1988, "status": "scotus",
    "agencies": ["DoITT"], "issue_area": "Civil Rights", "court": "U.S. Supreme Court",
    "plaintiffs": "City of New York and other municipalities",
    "summary": "NYC, joined by other cities, challenged FCC regulations preempting local authority to set technical signal-quality standards for cable television systems. The Court unanimously held that the FCC's preemption was within its statutory authority under the Cable Communications Policy Act of 1984.",
    "daily_effects": "Constrains the NYC Department of Information Technology and Telecommunications (now OTI) when negotiating and enforcing cable franchise agreements: the City cannot impose technical signal-quality requirements stricter than FCC rules, even though it retains authority over franchise terms, build-out, and customer service.",
    "monitor": null,
    "key_obligations": [
      "NYC franchise agreements must defer to FCC technical signal-quality standards",
      "City may regulate non-technical franchise terms (build-out, fees, customer service)",
      "Local cable regulators must align engineering specs with federal rules"
    ],
    "holding": "The FCC permissibly preempted state and local technical standards governing cable television signal quality that are stricter than federal standards.",
    "vote": "9-0", "justice_authoring": "Byron R. White",
    "legacy": "Set the boundary between NYC's cable franchise authority and federal regulation, shaping every subsequent NYC cable and broadband franchise negotiation.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/486/57/"},
      {"label": "Cornell LII", "url": "https://www.law.cornell.edu/supremecourt/text/486/57"}
    ]
  },
  {
    "id": "sibron-v-new-york",
    "case_name": "Sibron v. New York",
    "citation": "392 U.S. 40 (1968)",
    "year_filed": 1965, "year_entered": 1968, "status": "scotus",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "U.S. Supreme Court",
    "plaintiffs": "Nelson Sibron and John Francis Peters (consolidated)",
    "summary": "Companion to Terry v. Ohio, decided the same day, testing New York's stop-and-frisk statute as applied by NYPD officers. The Court held that an NYPD officer's reach into Sibron's pocket exceeded a protective frisk and lacked probable cause, while upholding the search in the companion Peters case as incident to a lawful arrest.",
    "daily_effects": "Limits NYPD officers conducting Terry stops to protective pat-downs for weapons based on specific articulable facts; bars reaching into pockets or other intrusive searches absent probable cause or a lawful arrest. Forms part of the constitutional baseline governing every NYPD street encounter and underlies later stop-and-frisk litigation including Floyd.",
    "monitor": null,
    "key_obligations": [
      "Frisks limited to protective pat-down for weapons",
      "Officers must have specific articulable facts the suspect is armed and dangerous",
      "No intrusion into pockets absent probable cause or arrest",
      "Mere association with known criminals does not justify a search"
    ],
    "holding": "A stop-and-frisk that goes beyond a protective pat-down for weapons and lacks probable cause violates the Fourth Amendment.",
    "vote": "8-1", "justice_authoring": "Earl Warren",
    "legacy": "The NYPD-specific companion to Terry: established that New York's stop-and-frisk statute could not authorize searches broader than a Terry pat-down, framing 55+ years of NYPD street-encounter doctrine and the foundation Floyd v. City of New York built on.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/392/40/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/1967/63"}
    ]
  },
  {
    "id": "mnn-v-halleck",
    "case_name": "Manhattan Community Access Corp. v. Halleck",
    "citation": "587 U.S. 802 (2019)",
    "year_filed": 2012, "year_entered": 2019, "status": "scotus",
    "agencies": ["DoITT", "MNN"], "issue_area": "Free Speech", "court": "U.S. Supreme Court",
    "plaintiffs": "DeeDee Halleck and Jesús Papoleto Meléndez",
    "summary": "Producers suspended by Manhattan Neighborhood Network (MNN), the private nonprofit designated by NYC to operate Manhattan's public access cable channels, sued claiming First Amendment violations. The Court held 5-4 that MNN is not a state actor and therefore is not bound by the First Amendment in its programming decisions.",
    "daily_effects": "Lets MNN and other NYC-designated public access operators set viewpoint-based programming rules without First Amendment liability, even though the City required cable franchisees to dedicate channels for public use. Shapes how NYC structures public access designations in cable franchise agreements citywide.",
    "monitor": null,
    "key_obligations": [
      "Private operators of NYC-designated public access channels are not state actors",
      "MNN may suspend or restrict programmers without First Amendment scrutiny",
      "NYC's designation of a private operator does not transform that operator into the government"
    ],
    "holding": "A private nonprofit operating public access channels under a New York City designation is not a state actor subject to the First Amendment.",
    "vote": "5-4", "justice_authoring": "Brett M. Kavanaugh",
    "legacy": "Tightened the state-action doctrine and immunized NYC's privately-operated public access system from constitutional speech claims, with implications across the City's many nonprofit-delivered services.",
    "links": [
      {"label": "Opinion (Justia)", "url": "https://supreme.justia.com/cases/federal/us/587/17-1702/"},
      {"label": "Oyez", "url": "https://www.oyez.org/cases/2018/17-1702"}
    ]
  },

  /* ============ NYS & bi-state authority decrees binding NYC ops ============ */
  {
    "id": "cidny-mta-subway-accessibility",
    "case_name": "Center for Independence of the Disabled, NY v. MTA; De La Rosa v. MTA (subway accessibility)",
    "citation": "Index No. 153765/2017 (N.Y. Sup. Ct.); 19-cv-04406 (S.D.N.Y.)",
    "year_filed": 2017, "year_entered": 2023, "status": "active",
    "agencies": ["MTA", "NYC Transit"], "issue_area": "Disability Rights",
    "court": "S.D.N.Y. / N.Y. Sup. Ct.",
    "plaintiffs": "CIDNY, BCID, Bronx Independent Living, Harlem ILC, Disabled In Action, and individual riders (Disability Rights Advocates and Sheppard Mullin)",
    "summary": "Twin state and federal class actions challenged the MTA's pattern of renovating subway stations without adding elevators or stair-free routes. The June 2022 settlement, granted final approval in April 2023, commits the MTA to making at least 95% of NYC subway stations accessible by 2055 and dedicating 14.69% of every five-year Capital Plan to station accessibility.",
    "daily_effects": "Every MTA five-year capital plan must carve out roughly 15% for ADA accessibility work, locking in dozens of new elevator projects each cycle. Stations being renovated must include accessibility upgrades by default. NYC riders who use wheelchairs, walkers, or strollers gain enforceable milestones (85 more stations by 2035, 90 more by 2045, 90 more by 2055), and advocates can return to court if benchmarks slip.",
    "monitor": "Court-supervised compliance reporting",
    "key_obligations": [
      "Dedicate ≥14.69% of each five-year MTA Capital Plan to subway station accessibility",
      "Make 95% of subway stations ADA-accessible by 2055 on the agreed schedule",
      "Include accessibility in any station renovation triggering ADA obligations",
      "Provide periodic compliance reports to plaintiffs",
      "Maintain elevator uptime and notify riders of outages"
    ],
    "recent_status": "Settlement remains in implementation; the 2025-2029 MTA Capital Plan is the first full plan subject to the 14.69% set-aside.",
    "judge": "Hon. Edgardo Ramos",
    "judge_note": "S.D.N.Y.; granted final federal approval April 24, 2023",
    "links": [
      {"label": "Disability Rights Advocates: MTA Settlement press release", "url": "https://dralegal.org/press/mta-settlement/"},
      {"label": "DRA: Final approval announcement", "url": "https://dralegal.org/press/mta-settlement-approval/"},
      {"label": "MTA Notice of Proposed Settlement", "url": "https://www.mta.info/accessibility/ada-settlement-notice"}
    ]
  },
  {
    "id": "bcid-nyc-emergency-planning",
    "case_name": "Brooklyn Center for Independence of the Disabled v. Bloomberg (NYC emergency planning ADA)",
    "citation": "11-cv-6690 (S.D.N.Y.)",
    "year_filed": 2011, "year_entered": 2014, "year_terminated": 2019, "status": "historical",
    "agencies": ["NYCEM", "HRA", "DOHMH"], "issue_area": "Disability Rights",
    "court": "S.D.N.Y.",
    "plaintiffs": "Brooklyn Center for Independence of the Disabled, CIDNY, and individual New Yorkers with disabilities",
    "summary": "Class action filed after Hurricane Irene exposed gaps in NYC's emergency planning for people with disabilities. Judge Jesse M. Furman ruled in November 2013 that the City violated the ADA, Rehabilitation Act, and NYC Human Rights Law; the parties reached a comprehensive remedial settlement on September 30, 2014.",
    "daily_effects": "NYC Emergency Management must operate evacuation centers and shelters that meet accessibility standards, maintain a high-rise evacuation plan, and stock accessible transportation and communications during disasters. The City created a Disability and Access and Functional Needs Coordinator position and a Disability Community Panel that advises on planning.",
    "monitor": null,
    "key_obligations": [
      "Survey and identify accessible shelter and evacuation center facilities citywide",
      "Maintain a high-rise evacuation plan for people with mobility disabilities",
      "Provide accessible transportation and communications during emergencies",
      "Hire a Disability and Access and Functional Needs Coordinator at NYCEM",
      "Establish and consult a Disability Community Panel"
    ],
    "legacy": "Court jurisdiction terminated in May 2019 by the settlement's terms; obligations remain embedded in NYC Emergency Management policies and procedures, though advocates continue to flag gaps during real emergencies.",
    "judge": "Hon. Jesse M. Furman",
    "judge_note": "S.D.N.Y.; issued the 2013 liability ruling and approved the 2014 settlement",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse", "url": "https://clearinghouse.net/case/13015/"},
      {"label": "DRA case page", "url": "https://dralegal.org/case/brooklyn-center-for-independence-of-the-disabled-bcid-et-al-v-mayor-bloomberg-et-al/"},
      {"label": "Yale Law Journal: The Right To Be Rescued", "url": "https://yalelawjournal.org/note/the-right-to-be-rescued"}
    ]
  },
  {
    "id": "ny-ny-supportive-housing",
    "case_name": "New York/New York Supportive Housing Agreements (NY/NY I, II, III)",
    "citation": "City-State agreements (1990, 1999, 2005); driven by Klostermann v. Cuomo",
    "year_filed": 1990, "year_entered": 1990, "status": "historical",
    "agencies": ["NYS OMH", "HPD", "DOHMH", "HRA", "DHS"], "issue_area": "Homelessness",
    "court": "N/A (negotiated city-state agreements)",
    "plaintiffs": "Negotiated agreements influenced by Klostermann v. Cuomo (1984) and Coalition for the Homeless advocacy",
    "summary": "A series of joint city-state pacts (NY/NY I 1990, NY/NY II 1999, NY/NY III 2005, plus successor 2015 NYC 15/15 and 2016 ESSHI state commitments) funded more than 14,000 supportive housing units in NYC for formerly homeless people with mental illness, HIV/AIDS, substance use disorders, and other disabilities. Not judicially entered consent decrees, but treated by both governments as binding operational commitments.",
    "daily_effects": "NYC HRA, DOHMH, DHS, and HPD jointly screen, refer, and place tens of thousands of formerly homeless New Yorkers into supportive housing developed and operated under the agreements. State OMH, OASAS, DOH, and OTDA pay for on-site services and rental subsidies, allowing NYC shelter and hospital systems to discharge people with serious mental illness into permanent housing.",
    "monitor": null,
    "key_obligations": [
      "Develop and operate jointly funded supportive housing units in NYC",
      "Maintain eligibility categories tied to NYC homelessness and disability",
      "Provide ongoing state-funded services and rental subsidies",
      "Coordinate intake through HRA's 2010e referral system",
      "Report production and occupancy to both governments"
    ],
    "legacy": "NY/NY III commitments largely completed; obligations now run through NYC 15/15 (city-only commitment to 15,000 units) and the state's Empire State Supportive Housing Initiative (ESSHI), which has funded over 26,000 statewide units.",
    "links": [
      {"label": "Supportive Housing Network of NY: History", "url": "https://shnny.org/supportive-housing/what-is-supportive-housing/history-of-supportive-housing/"},
      {"label": "Furman Center: NY/NY Agreements", "url": "https://furmancenter.org/coredata/directory/entry/new-york-new-york"}
    ]
  },
  {
    "id": "peoples-v-annucci",
    "case_name": "Peoples v. Annucci (NYS solitary confinement)",
    "citation": "11-cv-2694 (S.D.N.Y.)",
    "year_filed": 2011, "year_entered": 2016, "year_terminated": 2021, "status": "historical",
    "agencies": ["NYS DOCCS"], "issue_area": "Jails/Corrections", "court": "S.D.N.Y.",
    "plaintiffs": "Leroy Peoples and class of people in DOCCS Special Housing Units (NYCLU and Morrison & Foerster)",
    "summary": "Class action challenging DOCCS' use of solitary confinement (SHU) as a default discipline tool. A December 2015 settlement set sentencing guidelines, eliminated solitary for certain populations, and committed DOCCS to building alternative units. Largely superseded by the 2021 HALT Solitary Confinement Act.",
    "daily_effects": "Thousands of NYC residents incarcerated in NYS prisons saw reductions in maximum SHU sentences for non-violent infractions and bans on solitary for youth, pregnant people, and those with developmental disabilities. NYC re-entry providers, defenders, and family members rely on these limits to track upstate placements.",
    "monitor": "Court-supervised reporting",
    "key_obligations": [
      "Adopt new SHU sentencing guidelines capping disciplinary terms",
      "Bar solitary for youth, pregnant people, and people with developmental disabilities",
      "Develop Residential Rehabilitation Units as step-down housing",
      "Train staff on revised disciplinary procedures"
    ],
    "legacy": "Settlement obligations expired in stages through 2020-2021; the HALT Act and Fields v. Annucci (filed 2023) now drive enforcement.",
    "judge": "Hon. Shira A. Scheindlin",
    "judge_note": "S.D.N.Y. (retired 2016)",
    "links": [
      {"label": "Solitary Watch on Peoples settlement", "url": "https://solitarywatch.org/2016/04/04/how-the-landmark-settlement-will-and-will-not-change-solitary-confinement-in-new-yorks-prisons-redux/"},
      {"label": "NYS OIG HALT report (Aug 2024)", "url": "https://ig.ny.gov/system/files/documents/2024/08/nys-oig-doccs-halt-report-8.5.24.pdf"}
    ]
  },
  {
    "id": "mg-v-cuomo",
    "case_name": "M.G. v. Cuomo (NYS DOCCS / OMH community placement)",
    "citation": "19-cv-00639 (S.D.N.Y.)",
    "year_filed": 2019, "year_entered": null, "status": "pending",
    "agencies": ["NYS DOCCS", "NYS OMH", "DOHMH"], "issue_area": "Mental Health", "court": "S.D.N.Y.",
    "plaintiffs": "Indigent prisoners with serious mental illness eligible for release (Legal Aid Society and co-counsel)",
    "summary": "Class action alleging NYS DOCCS and OMH violate the ADA, Rehabilitation Act, and Due Process Clause by failing to provide community-based housing and supportive services that people with serious mental illness need to be released on parole. Plaintiffs say class members are warehoused in state prisons past their release dates because no integrated NYC placement exists.",
    "daily_effects": "If plaintiffs succeed, NYS OMH and DOCCS would have to coordinate with NYC providers (especially supportive housing in the five boroughs, which receives the bulk of returning class members) to ensure releasable people have a community placement. Today, NYC homelessness, mental-health, and re-entry agencies absorb the consequences.",
    "monitor": null,
    "key_obligations": [
      "Provide community-based housing and supportive services to releasable class members",
      "Stop prolonged confinement of class members past parole eligibility",
      "Coordinate discharge planning with NYC supportive-housing systems"
    ],
    "recent_status": "Active in S.D.N.Y. as of late 2023; motion practice ongoing.",
    "expected_resolution": "Motion practice continuing; settlement or trial 2026+",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse: M.G. v. Cuomo", "url": "https://clearinghouse.net/case/17096/"},
      {"label": "DOJ Statement of Interest", "url": "https://www.justice.gov/crt/case/mg-v-cuomo"}
    ]
  },
  {
    "id": "ab-v-ocfs-youth-solitary",
    "case_name": "A.B. v. New York State Office of Children and Family Services",
    "citation": "S.D.N.Y. (filed Jan. 2026)",
    "year_filed": 2026, "year_entered": null, "status": "pending",
    "agencies": ["NYS OCFS", "ACS"], "issue_area": "Child Welfare", "court": "S.D.N.Y.",
    "plaintiffs": "Four named youth in OCFS custody (Legal Aid Society and Jenner & Block)",
    "summary": "Putative federal class action alleging NYS OCFS holds children — including NYC kids placed by ACS and Family Court — in solitary confinement at secure-placement facilities for up to 24 hours a day, sometimes for weeks or months, without working toilets and without schooling. Plaintiffs assert Eighth Amendment, Fourteenth Amendment, and ADA violations.",
    "daily_effects": "If a class is certified and relief granted, OCFS would have to overhaul disciplinary, education, and mental-health practices at the five secure facilities that house many NYC youth post-disposition. NYC ACS, Family Court judges, and public defenders would gain enforceable limits on what happens to NYC youth they remand upstate.",
    "monitor": null,
    "key_obligations": [
      "End prolonged solitary confinement of youth in OCFS secure placement facilities",
      "Provide IDEA-compliant education during disciplinary confinement",
      "Ensure access to toilets, water, and basic necessities in disciplinary cells",
      "Comply with ADA in disciplinary practices affecting youth with disabilities"
    ],
    "recent_status": "Filed January 2026; OCFS denies allegations.",
    "expected_resolution": "Early motion stage 2026",
    "links": [
      {"label": "Legal Aid Society press release", "url": "https://legalaidnyc.org/news/lawsuit-end-solitary-confinement-children/"},
      {"label": "New York Focus investigation", "url": "https://nysfocus.com/2026/01/09/ocfs-children-solitary-confinement-bathrooms-secure-facilities-lawsuit"}
    ]
  },
  {
    "id": "hurrell-harring-indigent-defense",
    "case_name": "Hurrell-Harring v. State of New York",
    "citation": "Index No. 8866-07 (Albany Co. Sup. Ct.)",
    "year_filed": 2007, "year_entered": 2014, "status": "historical",
    "agencies": ["NYS Office of Indigent Legal Services"], "issue_area": "Civil Rights", "court": "N.Y. Sup. Ct., Albany County",
    "plaintiffs": "Indigent criminal defendants in five counties (NYCLU and Schulte Roth & Zabel)",
    "summary": "State constitutional challenge to New York's county-by-county public defense system. The October 2014 settlement committed New York to fund counsel at arraignment, set caseload caps, and ensure quality standards in five named counties. In 2017 the State enacted Executive Law § 832-a extending the reforms statewide.",
    "daily_effects": "Although NYC was not a named county, the statewide rollout funded by the post-Hurrell-Harring 2017 statute reimburses NYC's indigent-defense providers (Legal Aid, the institutional defenders, and assigned counsel) for caseload reduction, counsel-at-arraignment expansion, and quality enhancements.",
    "monitor": "NYS Office of Indigent Legal Services",
    "key_obligations": [
      "Provide counsel at every criminal defendant's first court appearance",
      "Set and enforce maximum caseload standards",
      "Hire sufficient lawyers, investigators, and support staff",
      "Provide state funding for compliance"
    ],
    "legacy": "Settlement obligations largely fulfilled; statewide implementation via ILS continues to underwrite NYC indigent defense operations.",
    "judge": "Hon. Gerald W. Connolly",
    "judge_note": "Albany Co. Sup. Ct.; approved 2015 settlement",
    "links": [
      {"label": "NYCLU case page", "url": "https://www.nyclu.org/court-cases/hurrell-harring-et-al-v-state-new-york-challenging-new-york-states-failure-provide-adequate"},
      {"label": "NYS ILS Hurrell-Harring page", "url": "https://www.ils.ny.gov/node/55/hurrell-harring-lawsuit"}
    ]
  },
  {
    "id": "united-spinal-nyc-boe-polling",
    "case_name": "United Spinal Association v. Board of Elections in the City of New York",
    "citation": "10-cv-5653 (S.D.N.Y.)",
    "year_filed": 2010, "year_entered": 2014, "status": "active",
    "agencies": ["BOE"], "issue_area": "Voting", "court": "S.D.N.Y. / 2d Cir.",
    "plaintiffs": "United Spinal Association, Disabled In Action, and individual voters (Disability Rights Advocates)",
    "summary": "ADA and Rehabilitation Act class action over physical inaccessibility of NYC polling places. After a 2012 SDNY liability ruling and a 2014 Second Circuit affirmance, the court ordered a remedial plan requiring NYC BOE to designate ADA coordinators at every poll site, retain an accessibility consultant, survey ~1,300 sites, and remediate or relocate inaccessible ones.",
    "daily_effects": "Every Election Day, an ADA coordinator must be on site at NYC polling locations to address barriers. The Board must survey and either fix or relocate inaccessible polling sites. Voters with mobility and vision disabilities have an enforceable right to private, independent voting at their designated site.",
    "monitor": "Independent accessibility consultant retained per court order",
    "key_obligations": [
      "Designate an ADA coordinator at every poll site on Election Day",
      "Retain an outside accessibility consultant",
      "Survey ~1,300 polling sites and remediate barriers",
      "Replace inaccessible sites with accessible alternates where remediation is infeasible",
      "Report compliance to plaintiffs and the court"
    ],
    "recent_status": "Remedial plan remains in effect; advocates continue to flag specific site failures each election cycle.",
    "judge": "Hon. Deborah A. Batts",
    "judge_note": "S.D.N.Y. (deceased Feb. 2020); successor judge for enforcement not publicly verified",
    "links": [
      {"label": "Civil Rights Litigation Clearinghouse", "url": "https://www.clearinghouse.net/detail.php?id=12320"},
      {"label": "DRA case page", "url": "https://dralegal.org/case/united-spinal-association-et-al-v-board-of-elections-boe/"}
    ]
  },
  {
    "id": "eason-boe-accessible-registration",
    "case_name": "Eason v. New York State Board of Elections",
    "citation": "16-cv-04292 (S.D.N.Y.)",
    "year_filed": 2016, "year_entered": 2019, "status": "active",
    "agencies": ["NYS BOE", "BOE"], "issue_area": "Voting", "court": "S.D.N.Y.",
    "plaintiffs": "Voters with print disabilities (Disability Rights Advocates and ACLU)",
    "summary": "ADA and Rehabilitation Act challenge to inaccessible online voter registration and absentee ballots. The February 2019 settlement required NYS BOE and DMV to make voter-registration websites screen-reader accessible by 2021; a follow-on agreement required the State to deploy a remote accessible vote-by-mail (RAVBM) system by June 2022 statewide.",
    "daily_effects": "NYC voters with visual or print disabilities can register online and request, receive, and mark absentee ballots electronically through the state RAVBM system, with NYC BOE handling local intake and counting.",
    "monitor": "Outside accessibility consultant; court-supervised compliance",
    "key_obligations": [
      "Make NYS BOE and DMV voter-registration websites WCAG-compliant",
      "Maintain ongoing accessibility audits with an outside consultant",
      "Deploy and maintain an accessible electronic absentee ballot system statewide",
      "Train county BOE staff on RAVBM procedures"
    ],
    "recent_status": "RAVBM system used in 2022-2025 elections; minor compliance disputes continue but the framework is operative.",
    "links": [
      {"label": "DRA: Eason case page", "url": "https://dralegal.org/case/eason-v-new-york-state-board-elections/"},
      {"label": "DRA: Statewide accessible absentee settlement", "url": "https://dralegal.org/press/ny-absentee-voting-settlement/"}
    ]
  },
  {
    "id": "nysed-cap-nyc-doe",
    "case_name": "NYSED Compliance Assurance Plan for NYC DOE (special education / IDEA)",
    "citation": "NYSED administrative; CAP May 2019",
    "year_filed": null, "year_entered": 2019, "status": "active",
    "agencies": ["NYSED", "DOE"], "issue_area": "Education", "court": "Administrative (NYSED)",
    "plaintiffs": "NYSED administrative action (not a court case)",
    "summary": "An administrative compliance regime in which NYSED placed NYC DOE under a written Compliance Assurance Plan in May 2019 after identifying NYC DOE as failing IDEA requirements for the disability subgroup for 13 consecutive years. NYSED has also issued Part 154 corrective action plans for English Language Learners.",
    "daily_effects": "NYC DOE special-education leadership must report progress on timely IEP implementation, related-services delivery, impartial hearing system performance, and procedural safeguards. NYSED's continued 'needs intervention' designation drives city budget priorities and special-ed initiatives.",
    "monitor": "NYSED special education and bilingual education oversight offices",
    "key_obligations": [
      "Submit and execute IDEA corrective action steps with measurable goals",
      "Comply with Part 154 plan for English Language Learner services",
      "Provide periodic data reports to NYSED on disability subgroup outcomes",
      "Remediate procedural-safeguards failures",
      "Risk withholding of federal IDEA funds for continued noncompliance"
    ],
    "recent_status": "NYC DOE remains under NYSED scrutiny in 2024-2026; NYC Comptroller's 2024 'Course Correction' report and successor audits continue to document gaps.",
    "links": [
      {"label": "NYCDOE Compliance Assurance Plan May 2019 (NYSED)", "url": "https://www.p12.nysed.gov/compcontracts/nysed-rfi-21-003-iho-nyc/nycdoe-compliance-assurance-plan-may-2019.pdf"},
      {"label": "NYC Comptroller: Course Correction", "url": "https://comptroller.nyc.gov/reports/course-correction/"}
    ]
  },
  {
    "id": "port-authority-path-grove-street",
    "case_name": "Heightened Independence and Progress / United Spinal v. Port Authority (Grove Street PATH)",
    "citation": "Settled 2021 (D.N.J.)",
    "year_filed": 2014, "year_entered": 2021, "status": "active",
    "agencies": ["Port Authority of NY & NJ"], "issue_area": "Disability Rights", "court": "D.N.J.",
    "plaintiffs": "Heightened Independence and Progress (hip) and United Spinal Association",
    "summary": "ADA suit against the bi-state Port Authority over its 2005 renovation of the Grove Street PATH station without elevators. The 2021 settlement requires installation of an elevator at the southwest entrance and a vertical platform lift on the west side, the first enforceable PATH-system ADA decree in decades.",
    "daily_effects": "Tens of thousands of daily NYC-bound commuters using wheelchairs or strollers gain a path between Grove Street and the World Trade Center / Exchange Place stops. The settlement is a template for ongoing pressure on the Port Authority Bus Terminal, WTC PATH hub, and JFK/LGA AirTrains.",
    "monitor": null,
    "key_obligations": [
      "Construct an elevator at the southwest entrance of Grove Street PATH",
      "Install a vertical platform lift on the west side",
      "Maintain accessibility features once installed",
      "Report progress to plaintiffs"
    ],
    "recent_status": "Construction underway; companion DOJ settlements and audits (NYS OSC 2023 Port Authority audit) continue to flag PA Bus Terminal and other gates as inaccessible.",
    "links": [
      {"label": "Community Health Law Project: Grove Street PATH settlement", "url": "https://chlp.org/2021-07-13-settlement-reached-in-path-accessibility-lawsuit"},
      {"label": "USAO-NJ Port Authority ADA settlement", "url": "https://www.justice.gov/usao-nj/pr/us-attorney-s-office-reaches-ada-settlement-port-authority-new-york-and-new-jersey"}
    ]
  },
  {
    "id": "doccs-marcy-federal-review",
    "case_name": "U.S. DOJ / FBI review of NYS DOCCS (Marcy Correctional Facility; killing of Robert Brooks)",
    "citation": "Federal investigation (no public docket); parallel Oneida County state prosecution",
    "year_filed": 2024, "year_entered": null, "status": "pending",
    "agencies": ["NYS DOCCS"], "issue_area": "Jails/Corrections", "court": "Federal investigation",
    "plaintiffs": "Federal investigation; parallel state prosecution of indicted officers",
    "summary": "After the December 9, 2024 fatal beating of Robert Brooks by Marcy Correctional Facility officers while he was handcuffed, the FBI Albany field office and DOJ opened a review. A state grand jury indicted nearly a dozen DOCCS officers on murder and related charges in February 2025; Governor Hochul also ordered an outside review of DOCCS culture and practices.",
    "daily_effects": "Roughly a third of people in NYS DOCCS custody are from NYC, so any federal reforms (use-of-force directives, body-worn cameras, supervision protocols) ripple into how NYC residents are treated upstate. NYC re-entry providers, families, and defenders directly engage with the indicted facility.",
    "monitor": null,
    "key_obligations": [
      "Cooperate with federal investigation and any resulting consent decree",
      "Implement Hochul-ordered outside review recommendations",
      "Expand body-worn camera use and supervision in DOCCS facilities",
      "Discipline and prosecute implicated officers"
    ],
    "recent_status": "Federal review remains open as of May 2026; state criminal prosecutions of indicted officers are ongoing.",
    "expected_resolution": "Federal findings or consent decree 2026-2027",
    "links": [
      {"label": "Spectrum News: FBI/DOJ reviewing Marcy death", "url": "https://spectrumlocalnews.com/nys/rochester/public-safety/2024/12/29/fbi--doj-reviewing-death-of-marcy-correctional-facility-inmate"},
      {"label": "NYCLU: 20 years of NYS prison misconduct records", "url": "https://www.nyclu.org/press-release/nyclu-releases-20-years-of-state-prison-misconduct-records"}
    ]
  },

  /* ============ Fair housing, voting, environmental, and other NYC decrees ============ */
  {
    "id": "us-v-nyc-dep-cso",
    "case_name": "United States and State of NY v. City of New York (DEP Combined Sewer Overflow / Citywide LTCP)",
    "citation": "NYSDEC CO2-20050121-25 (modified 2012, 2018, 2024); federal Clean Water Act enforcement",
    "year_filed": 2005, "year_entered": 2005, "status": "active",
    "agencies": ["DEP"], "issue_area": "Environmental Justice",
    "court": "NYSDEC administrative + federal Clean Water Act",
    "plaintiffs": "U.S. EPA and NYS Department of Environmental Conservation",
    "summary": "A series of state and federal Clean Water Act consent orders requiring NYC DEP to reduce Combined Sewer Overflows (CSO) into NY Harbor, the East River, Newtown Creek, the Bronx River, Flushing Bay, Jamaica Bay, and other waterbodies. The 2005 CSO Consent Order, modified in 2012, 2018, and 2024, governs DEP's $4+ billion long-term capital program of grey and green infrastructure.",
    "daily_effects": "Drives DEP's capital plan for sewer separation, holding tanks (Paerdegat, Flushing Bay, Gowanus, Newtown Creek), bluebelt expansion, and the NYC Green Infrastructure Program. Establishes deadlines for waterbody-specific LTCPs reviewed and approved by DEC. Triggers stipulated penalties when milestones slip and shapes water/sewer rates the Water Board sets annually.",
    "monitor": "NYSDEC Region 2; EPA Region 2 federal oversight",
    "key_obligations": [
      "Submit and implement waterbody-specific Long-Term Control Plans",
      "Construct CSO storage facilities and high-level storm sewers on enforceable schedules",
      "Install ≥10% impervious-area green infrastructure capture in priority CSO watersheds",
      "Report annually on CSO volumes, capital progress, and water-quality monitoring",
      "Pay stipulated penalties for missed milestones"
    ],
    "recent_status": "DEC issued a modified CSO order in 2024 extending several LTCP deadlines and adding Bronx River and Coney Island Creek obligations; DEP's FY2026 capital plan reflects roughly $1.9B in compliance spend.",
    "links": [
      {"label": "NYC DEP — Combined Sewer Overflow Program", "url": "https://www.nyc.gov/site/dep/water/combined-sewer-overflows.page"},
      {"label": "NYSDEC — NYC CSO Consent Order documents", "url": "https://www.dec.ny.gov/regulations/68637.html"}
    ]
  },
  {
    "id": "newtown-creek-superfund",
    "case_name": "Newtown Creek Superfund Site (CERCLA Administrative Order on Consent)",
    "citation": "CERCLA Docket No. 02-2011-2010",
    "year_filed": 2010, "year_entered": 2011, "status": "active",
    "agencies": ["DEP", "DSNY", "EDC"], "issue_area": "Environmental Justice",
    "court": "U.S. EPA Region 2 administrative",
    "plaintiffs": "U.S. EPA",
    "summary": "EPA listed Newtown Creek on the Superfund NPL in 2010 and named NYC as one of six Potentially Responsible Parties under a 2011 Administrative Order on Consent. The City — through DEP and historical DSNY incinerators and EDC-controlled uplands — must fund and conduct the remedial investigation/feasibility study.",
    "daily_effects": "Obligates ongoing City contributions to the RI/FS and any subsequent remedial design, and constrains DEP's CSO and bulkhead work along the creek. Coordinates with the parallel CSO Consent Order's Newtown Creek LTCP.",
    "monitor": null,
    "key_obligations": [
      "Fund and execute RI/FS work under EPA oversight",
      "Coordinate creek-side CSO and bulkhead projects with Superfund remedy",
      "Participate in allocation/contribution proceedings among PRPs",
      "Submit periodic progress reports to EPA Region 2",
      "Maintain institutional controls on City-owned uplands"
    ],
    "recent_status": "EPA released the Proposed Plan for the lower 3.5 miles in late 2024; a Record of Decision is expected 2026, after which a remedial-design consent decree will be negotiated with NYC as a named PRP.",
    "links": [
      {"label": "EPA — Newtown Creek Superfund Site", "url": "https://www.epa.gov/superfund/newtown-creek"}
    ]
  },
  {
    "id": "gowanus-canal-superfund",
    "case_name": "Gowanus Canal Superfund Site (EPA Record of Decision and Consent Decrees)",
    "citation": "EPA ROD Sept. 27, 2013",
    "year_filed": 2010, "year_entered": 2013, "status": "active",
    "agencies": ["DEP"], "issue_area": "Environmental Justice",
    "court": "U.S. EPA Region 2; S.D.N.Y. for judicial consent decrees",
    "plaintiffs": "U.S. EPA",
    "summary": "EPA's 2013 Record of Decision for the Gowanus Canal Superfund site allocated cleanup responsibility among PRPs including NYC (as historical operator of municipal incinerators and current owner of CSO outfalls). The City is bound by an Administrative Settlement Agreement to design and build two CSO retention tanks (Head-End and Owl's Head/4th Street) integrated with the dredging remedy.",
    "daily_effects": "Forces DEP to build the 8-million-gallon Head-End tank and the 4-million-gallon Owl's Head tank under EPA-enforceable schedules. Construction has displaced city property at Thomas Greene Playground and the Double D Pool, requiring replacement facilities. Sets the tempo for adjacent Gowanus rezoning infrastructure work.",
    "monitor": null,
    "key_obligations": [
      "Design, build, and operate two CSO retention tanks per EPA schedule",
      "Coordinate tank construction with EPA dredging and capping of canal sediments",
      "Replace Thomas Greene Playground and provide interim community amenities",
      "Reimburse EPA past response costs",
      "Submit quarterly progress reports"
    ],
    "recent_status": "Dredging of the upper canal completed in 2024; tank construction continues with revised completion targets of 2028 (Head-End) and 2030 (Owl's Head).",
    "links": [
      {"label": "EPA — Gowanus Canal Superfund Site", "url": "https://www.epa.gov/superfund/gowanus-canal"},
      {"label": "NYC DEP — Gowanus CSO Facilities", "url": "https://www.nyc.gov/site/dep/water/gowanus-canal.page"}
    ]
  },
  {
    "id": "nyc-watershed-fad",
    "case_name": "NYC Watershed Memorandum of Agreement and Filtration Avoidance Determination",
    "citation": "1997 Watershed MOA; EPA FAD (revised 2017, modified 2023)",
    "year_filed": 1993, "year_entered": 1997, "status": "active",
    "agencies": ["DEP"], "issue_area": "Environmental Justice",
    "court": "Administrative (EPA and NYSDOH); enforceable via Safe Drinking Water Act",
    "plaintiffs": "U.S. EPA, NYS Department of Health, watershed municipalities, and environmental coalition",
    "summary": "The 1997 NYC Watershed MOA and federal Filtration Avoidance Determination (FAD) bind NYC DEP to a watershed-protection program in lieu of building a $10+ billion filtration plant for the Catskill/Delaware system. The FAD is renewed roughly every 5-10 years and is enforceable under the Safe Drinking Water Act.",
    "daily_effects": "Drives DEP's land acquisition program in the Catskills, septic-system rehabilitation grants, stream-corridor restoration, and the West-of-Hudson farm and forestry programs. Funds Catskill Watershed Corporation grants to upstate towns. Failure to meet FAD criteria would force filtration construction and large water-rate increases.",
    "monitor": null,
    "key_obligations": [
      "Acquire or conserve watershed land per annual targets",
      "Fund septic remediation and stormwater retrofits in West-of-Hudson towns",
      "Operate Catskill turbidity-control and UV disinfection facilities",
      "Submit annual FAD compliance reports to EPA and NYSDOH",
      "Maintain Watershed Rules and Regulations enforcement"
    ],
    "recent_status": "EPA and NYSDOH issued a mid-term FAD revision in 2023 tightening turbidity reporting after the 2020-2022 Ashokan Reservoir releases controversy; next full FAD review is 2027.",
    "links": [
      {"label": "NYC DEP — Filtration Avoidance Determination", "url": "https://www.nyc.gov/site/dep/water/filtration-avoidance.page"},
      {"label": "NYSDOH — 2017 FAD and revisions", "url": "https://www.health.ny.gov/environmental/water/drinking/nycfad/"}
    ]
  },
  {
    "id": "us-v-nyc-boe-chinese",
    "case_name": "United States v. NYC Board of Elections (Section 203 / Chinese-language assistance)",
    "citation": "1:13-cv-04114 (E.D.N.Y.)",
    "year_filed": 2013, "year_entered": 2013, "status": "active",
    "agencies": ["BOE"], "issue_area": "Voting", "court": "E.D.N.Y.",
    "plaintiffs": "U.S. Department of Justice, Civil Rights Division",
    "summary": "DOJ sued NYC BOE under Section 203 of the Voting Rights Act for failing to provide adequate Chinese-language assistance in Manhattan, Queens, and Brooklyn. A memorandum of agreement and federal-monitor stipulation requires bilingual poll workers, translated materials, and DOJ observer access.",
    "daily_effects": "Forces BOE to recruit and assign Chinese-speaking poll workers and interpreters to covered poll sites every primary, runoff, and general election. Requires translated ballots, signage, and voter-information materials in Chinese. BOE must report deployments to DOJ pre- and post-election.",
    "monitor": "DOJ federal election observers (Voting Section)",
    "key_obligations": [
      "Recruit and deploy bilingual Chinese-language poll workers at all covered sites",
      "Translate ballots, signage, and voter education materials",
      "Provide pre-election training and post-election reporting to DOJ",
      "Permit DOJ federal observers on election day",
      "Maintain a language-assistance coordinator at BOE"
    ],
    "recent_status": "DOJ observers continued to monitor the 2024 general election; AALDEF documented persistent gaps in poll-site coverage.",
    "links": [
      {"label": "DOJ press release — 2013 filing", "url": "https://www.justice.gov/opa/pr/justice-department-files-lawsuit-against-new-york-city-board-elections-violations-voting"},
      {"label": "AALDEF — NYC poll monitoring", "url": "https://www.aaldef.org/program/voting-rights/"}
    ]
  },
  {
    "id": "us-v-nyc-boe-bengali",
    "case_name": "United States v. NYC Board of Elections (Bengali-language assistance, Queens)",
    "citation": "MOA Mar. 7, 2017 (related to 13-cv-04114)",
    "year_filed": 2017, "year_entered": 2017, "status": "active",
    "agencies": ["BOE"], "issue_area": "Voting", "court": "E.D.N.Y.",
    "plaintiffs": "U.S. Department of Justice, Civil Rights Division",
    "summary": "Following the 2011 Census Bureau designation of Queens County for Bengali-language coverage under Section 203, DOJ negotiated a 2017 MOA requiring NYC BOE to provide Bengali ballots, signage, and bilingual poll workers in covered Queens election districts.",
    "daily_effects": "BOE must print Bengali ballots for designated Queens AD election districts each cycle. Requires bilingual Bengali interpreters at designated sites and Bengali voter-education mailings. DOJ retains site-visit and document-inspection rights.",
    "monitor": "DOJ Voting Section observers",
    "key_obligations": [
      "Translate Queens ballots and election materials into Bengali",
      "Recruit Bengali-speaking poll workers and interpreters",
      "Conduct Bengali voter outreach and education",
      "Report compliance to DOJ before and after each election",
      "Allow DOJ inspection of poll sites and records"
    ],
    "recent_status": "Coverage continued through 2024; AALDEF and Chhaya CDC documented continued interpreter-staffing shortfalls at South Asian-heavy sites in 2024-2025.",
    "links": [
      {"label": "DOJ — 2017 NYC Bengali MOA", "url": "https://www.justice.gov/opa/pr/justice-department-secures-agreement-new-york-city-board-elections-protect-rights-bengali"}
    ]
  },
  {
    "id": "us-v-nyc-boe-korean-2008",
    "case_name": "United States v. NYC Board of Elections (Korean and Chinese assistance, 2008)",
    "citation": "1:08-cv-04567 (E.D.N.Y.)",
    "year_filed": 2008, "year_entered": 2008, "year_terminated": 2013, "status": "historical",
    "agencies": ["BOE"], "issue_area": "Voting", "court": "E.D.N.Y.",
    "plaintiffs": "U.S. Department of Justice (following AALDEF complaints)",
    "summary": "After repeated AALDEF poll-monitoring reports documented failures in Asian-language assistance, DOJ sued NYC BOE in 2008 over Section 203 violations affecting Korean and Chinese voters. The 2008 consent decree required translated materials, bilingual workers, and DOJ reporting; largely subsumed by the 2013 follow-on litigation.",
    "daily_effects": "Established the template for Asian-language compliance still followed by BOE — translated ballots, designated bilingual coordinators, and pre-election DOJ reporting. Day-to-day obligations carried forward into the active 2013 framework.",
    "monitor": "DOJ observers",
    "key_obligations": [
      "Provide Chinese and Korean ballots in covered districts",
      "Train and deploy bilingual poll workers",
      "Report staffing and complaint data to DOJ",
      "Permit federal observers",
      "Designate a language-assistance coordinator"
    ],
    "legacy": "Largely superseded by 2013 enforcement and 2017 Bengali MOA; historical reference for Asian-language compliance baseline.",
    "links": [
      {"label": "DOJ — 2008 NYC BOE complaint", "url": "https://www.justice.gov/crt/case-document/file/1118396/download"}
    ]
  },
  {
    "id": "ny-v-cushman-wakefield-soi",
    "case_name": "People of the State of NY v. Cushman & Wakefield (source-of-income discrimination)",
    "citation": "Index No. 451444/2018 (N.Y. Sup. Ct., N.Y. County)",
    "year_filed": 2018, "year_entered": 2019, "year_terminated": 2022, "status": "historical",
    "agencies": ["NYC Commission on Human Rights"], "issue_area": "Housing",
    "court": "N.Y. Sup. Ct., New York County",
    "plaintiffs": "NYS Attorney General with NYC Commission on Human Rights cooperation",
    "summary": "Following a Fair Housing Justice Center testing investigation, the NY Attorney General secured a stipulated judgment requiring Cushman & Wakefield to accept Section 8 and other rental subsidies across its NYC brokerage portfolio and pay $115,000.",
    "daily_effects": "Required affirmative changes to listing software, agent training, and complaint intake at one of the largest NYC commercial/residential brokerages. NYC CCHR used the model in dozens of follow-on cases against smaller brokers.",
    "monitor": "OAG Civil Rights Bureau compliance review (3 years)",
    "key_obligations": [
      "Accept Section 8, CityFHEPS, and other lawful sources of income",
      "Train all NYC-licensed agents on source-of-income protections",
      "Adopt revised advertising and listing policies",
      "Report complaints to OAG for 3-year compliance term",
      "Pay $115,000 in penalties and costs"
    ],
    "legacy": "Compliance term expired in 2022; precedent cited in CCHR enforcement against Douglas Elliman (2022) and a 2024 portfolio settlement with A&E Real Estate.",
    "links": [
      {"label": "NYS OAG — 2019 settlement", "url": "https://ag.ny.gov/press-release/2019/ag-james-announces-settlement-cushman-wakefield-discriminating-against-tenants"}
    ]
  },
  {
    "id": "cchr-douglas-elliman-soi",
    "case_name": "NYC Commission on Human Rights v. Douglas Elliman (source-of-income discrimination)",
    "citation": "CCHR Conciliation Agreement (2022)",
    "year_filed": 2020, "year_entered": 2022, "status": "active",
    "agencies": ["NYC Commission on Human Rights"], "issue_area": "Housing",
    "court": "NYC CCHR administrative",
    "plaintiffs": "NYC Commission on Human Rights Law Enforcement Bureau",
    "summary": "After a multi-year testing investigation, CCHR entered a conciliation agreement with Douglas Elliman in 2022 requiring system-wide acceptance of rental subsidies, $120,000 in penalties, mandatory training, and three years of compliance reporting.",
    "daily_effects": "Forces real-time training and monitoring of one of NYC's largest residential brokerages, with quarterly reports to CCHR. Created a template for follow-on agreements with other brokerages through 2025.",
    "monitor": "CCHR Law Enforcement Bureau (3-year compliance term)",
    "key_obligations": [
      "Maintain anti-discrimination policy accepting all lawful sources of income",
      "Train all NYC agents and brokers annually",
      "Quarterly reporting of complaints and testing-based audits to CCHR",
      "Post anti-discrimination notice on listings",
      "Pay $120,000 penalty"
    ],
    "recent_status": "Agreement remains in compliance phase through 2025; cited as model in 2024 settlements with two large management firms.",
    "links": [
      {"label": "NYC CCHR press page", "url": "https://www.nyc.gov/site/cchr/media/press-releases.page"}
    ]
  },
  {
    "id": "nyc-lead-paint-ll1",
    "case_name": "NYC Coalition to End Lead Poisoning v. Vallone (Local Law 1 enforcement)",
    "citation": "Index No. 41011/95 (N.Y. Sup. Ct., N.Y. County)",
    "year_filed": 1995, "year_entered": 1999, "year_terminated": 2004, "status": "historical",
    "agencies": ["HPD", "DOHMH"], "issue_area": "Housing",
    "court": "N.Y. Sup. Ct., New York County",
    "plaintiffs": "NYC Coalition to End Lead Poisoning",
    "summary": "Years of litigation forced the City to enforce Local Law 1 of 1982's lead-paint hazard provisions, culminating in court orders directing HPD and DOHMH to inspect, abate, and report on lead hazards. Prompted Local Law 1 of 2004.",
    "daily_effects": "Established HPD's Lead Hazard Reduction Unit workflow — annual landlord notices, in-unit inspections at turnover, abatement enforcement, and DOHMH blood-lead surveillance linkage. Court-ordered remedial framework was succeeded by Local Law 1 of 2004 statutory regime still in force.",
    "monitor": null,
    "key_obligations": [
      "Inspect known lead-hazard buildings at turnover",
      "Enforce abatement orders against landlords",
      "Coordinate DOHMH blood-lead case follow-up",
      "Report annually on enforcement metrics",
      "Maintain registry of buildings with children under 6"
    ],
    "legacy": "Active 2024-2025 enforcement under Local Law 31 of 2020 and Local Law 123 of 2023; HPD facing renewed legal pressure from WE ACT for Environmental Justice over compliance gaps in NYCHA.",
    "links": [
      {"label": "NYC HPD — Lead Paint", "url": "https://www.nyc.gov/site/hpd/services-and-information/lead-based-paint.page"}
    ]
  },
  {
    "id": "davis-nycha-rd-section-504",
    "case_name": "Davis v. NYC Housing Authority (Section 504 reasonable accommodation)",
    "citation": "1:90-cv-00628 (S.D.N.Y.)",
    "year_filed": 1990, "year_entered": 1992, "year_terminated": 2013, "status": "historical",
    "agencies": ["NYCHA"], "issue_area": "Disability Rights",
    "court": "S.D.N.Y.",
    "plaintiffs": "NYCHA tenants with disabilities (MFY Legal Services and Disability Rights Advocates)",
    "summary": "Class action under Section 504 and the FHAA producing a consent decree requiring NYCHA to provide a meaningful reasonable-accommodation process, accessible-unit set-asides, and transfers for tenants with disabilities. Framework later subsumed by the 2013 federal HUD/DOJ NYCHA Section 504 voluntary compliance agreement.",
    "daily_effects": "Created NYCHA's Department of Reasonable Accommodations and the disability-transfer waiting list. Established procedural rights still relied on by tenants in 2024-2026 even after the agreement formally closed.",
    "monitor": null,
    "key_obligations": [
      "Establish written reasonable-accommodation policy and intake process",
      "Convert minimum percentage of units to accessibility standards on turnover",
      "Provide expedited transfers for qualifying tenants",
      "Train property managers on Section 504 obligations",
      "Report annually on accommodation requests and outcomes"
    ],
    "legacy": "Obligations folded into the 2013 NYCHA Section 504 voluntary compliance agreement with HUD and the 2019 HUD/SDNY Agreement (already in this database).",
    "links": [
      {"label": "DRA — NYCHA cases", "url": "https://dralegal.org/case/davis-v-new-york-city-housing-authority/"}
    ]
  },
  {
    "id": "us-v-nyc-dot-aps",
    "case_name": "United States v. City of New York (DOT Accessible Pedestrian Signals)",
    "citation": "Settlement Agreement, DJ No. 204-52-104 (2013)",
    "year_filed": 2012, "year_entered": 2013, "status": "active",
    "agencies": ["DOT"], "issue_area": "Disability Rights", "court": "S.D.N.Y.",
    "plaintiffs": "U.S. Department of Justice, Civil Rights Division",
    "summary": "DOJ and NYC DOT entered a Title II ADA settlement requiring installation of Accessible Pedestrian Signals (APS) at signalized intersections citywide. Complements the separate curb-ramp consent decree and covers audible/vibrotactile signals for blind and low-vision pedestrians.",
    "daily_effects": "DOT installs hundreds of APS units annually under court-enforceable schedules; complaints are routed to a designated DOT ADA coordinator.",
    "monitor": "DOJ Disability Rights Section",
    "key_obligations": [
      "Install APS at a minimum annual number of signalized intersections",
      "Prioritize intersections near schools for the blind and senior centers",
      "Maintain a complaint and request log accessible to the public",
      "Train DOT signal engineers on APS standards",
      "Submit annual compliance reports to DOJ"
    ],
    "recent_status": "Largely superseded operationally by the 2021 ACB v. NYC consent decree, which mandates full APS coverage by 2031.",
    "links": [
      {"label": "DOJ — 2013 NYC APS settlement", "url": "https://www.ada.gov/nyc_pedestrian_sa.html"}
    ]
  },
  {
    "id": "acb-v-nyc-aps",
    "case_name": "American Council of the Blind of NY v. City of New York (APS consent decree)",
    "citation": "1:18-cv-05792 (S.D.N.Y.)",
    "year_filed": 2018, "year_entered": 2021, "status": "active",
    "agencies": ["DOT"], "issue_area": "Disability Rights", "court": "S.D.N.Y.",
    "plaintiffs": "American Council of the Blind of NY and individual blind pedestrians (Disability Rights Advocates)",
    "summary": "Following a 2020 liability ruling that DOT's lack of Accessible Pedestrian Signals violated Title II of the ADA, the parties entered a 2021 consent decree requiring APS installation at all of NYC's ~13,200 signalized intersections by 2031.",
    "daily_effects": "DOT must install APS at roughly 9% of remaining intersections each year and prioritize sites near schools, hospitals, senior centers, and transit hubs. Decree triggers stipulated penalties for missed targets and required hiring of additional traffic engineers.",
    "monitor": "Court-appointed monitor and DRA compliance counsel",
    "key_obligations": [
      "Install APS at 100% of signalized intersections by 2031",
      "Meet annual installation milestones (~1,200 intersections/yr)",
      "Maintain APS once installed",
      "Submit semi-annual reports to plaintiffs and court",
      "Pay attorney fees and compliance-monitoring costs"
    ],
    "recent_status": "DOT remained on schedule through 2024 reporting, with about 5,000 intersections equipped by mid-2025; plaintiffs raised concerns about maintenance backlog at older installations.",
    "judge": "Hon. Paul A. Engelmayer",
    "judge_note": "S.D.N.Y.; issued 2020 liability ruling and approved 2021 decree",
    "links": [
      {"label": "DRA — ACB v. NYC", "url": "https://dralegal.org/case/american-council-of-the-blind-of-new-york-et-al-v-city-of-new-york/"}
    ]
  },
  {
    "id": "nypd-columbia-cuny-protest-2024",
    "case_name": "Doe v. City of New York (NYPD Columbia/CUNY protest mass-arrest settlement)",
    "citation": "1:24-cv-05153 (S.D.N.Y.)",
    "year_filed": 2024, "year_entered": 2025, "status": "active",
    "agencies": ["NYPD"], "issue_area": "Policing", "court": "S.D.N.Y.",
    "plaintiffs": "Arrested protesters (NYCLU, CUNY CLEAR, and CCR)",
    "summary": "Class settlement arising from the April-May 2024 NYPD raids at Columbia University's Hamilton Hall and CUNY's City College Gaza solidarity encampments. The agreement adds binding limitations on use of batons, sound cannons, and mass-arrest processing tied to the existing Sow/Payne post-2020-protest frameworks.",
    "daily_effects": "Constrains NYPD Strategic Response Group and Disorder Control Unit deployments at campus protests, requires expedited processing and counsel access for arrestees, and obliges retraining tied to the federal-monitor structure operating under Sow v. City of New York.",
    "monitor": "Coordinated with Sow monitor team",
    "key_obligations": [
      "Restrict mass-arrest tactics at campus protests",
      "Provide arrestee access to counsel within set timeframes",
      "Document and review every use of force at protests",
      "Retraining of SRG and DCU personnel",
      "Pay damages to class members and attorney fees"
    ],
    "recent_status": "Preliminary approval entered late 2025; final fairness hearing scheduled early 2026.",
    "judge": "Hon. Dale E. Ho",
    "judge_note": "S.D.N.Y.",
    "links": [
      {"label": "NYCLU — Columbia/CUNY protest litigation", "url": "https://www.nyclu.org/en/cases/columbia-cuny-protest-litigation"}
    ]
  },
  {
    "id": "nyc-doe-ell-compliance",
    "case_name": "U.S. v. NYC DOE (English Language Learners Compliance Agreement)",
    "citation": "OCR Case No. 02-10-1083; DOJ MOU (2018)",
    "year_filed": 2014, "year_entered": 2018, "status": "active",
    "agencies": ["DOE"], "issue_area": "Education",
    "court": "U.S. Dept. of Education OCR / DOJ administrative",
    "plaintiffs": "U.S. Department of Education Office for Civil Rights and DOJ Civil Rights Division",
    "summary": "Following OCR investigations of ELL services across NYC DOE, the City entered a 2018 compliance agreement requiring identification, programming, and exit protocols for English Language Learners consistent with Title VI and the EEOA. Updates obligations originally rooted in the 1974 ASPIRA Consent Decree.",
    "daily_effects": "Drives DOE's Division of Multilingual Learners staffing, mandates bilingual program seats at specified schools, and sets reporting on ELL identification timeliness, services, and graduation outcomes. Triggers OCR site visits and corrective-action plans for non-compliant districts.",
    "monitor": "U.S. ED Office for Civil Rights",
    "key_obligations": [
      "Timely identify and place ELL students",
      "Provide bilingual or ENL services per state regulation",
      "Translate parent communications in 9+ languages",
      "Report annual ELL outcome data to OCR/DOJ",
      "Conduct annual self-audits at flagged schools"
    ],
    "recent_status": "OCR issued a 2024 corrective-action letter flagging continuing deficiencies in newcomer-student programming amid the asylum-seeker enrollment surge.",
    "links": [
      {"label": "USDOE OCR — Resolution Agreement", "url": "https://www2.ed.gov/about/offices/list/ocr/docs/investigations/more/02101083-b.pdf"}
    ]
  }
];
