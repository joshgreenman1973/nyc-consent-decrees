const JUDGES = {
  "nunez-doc": { judge: "Hon. Laura Taylor Swain", judge_note: "Chief Judge, S.D.N.Y.; ordered appointment of Remediation Manager May 2025" },
  "nunez-rikers-receivership": { judge: "Hon. Laura Taylor Swain", judge_note: "Chief Judge, S.D.N.Y." },
  "benjamin-doc": { judge: "Hon. Loretta A. Preska", judge_note: "Senior status, S.D.N.Y." },
  "brad-h-doc-dohmh": { judge: null, judge_note: "Originally Justice Richard F. Braun; no current active justice publicly verified" },
  "floyd-nypd": { judge: "Hon. Analisa Torres", judge_note: "S.D.N.Y.; reassigned from Judge Scheindlin after 2013 recusal" },
  "ligon-nypd": { judge: "Hon. Analisa Torres", judge_note: "S.D.N.Y.; consolidated with Floyd" },
  "davis-nypd-nycha": { judge: "Hon. Analisa Torres", judge_note: "S.D.N.Y.; transferred April 2015 to consolidate stop-and-frisk oversight" },
  "handschu-nypd": { judge: "Hon. Charles S. Haight, Jr.", judge_note: "Senior status, S.D.N.Y.; has presided since the 1970s" },
  "raza-nypd": { judge: "Hon. Pamela K. Chen", judge_note: "E.D.N.Y." },
  "nycha-hud-agreement": { judge: null, judge_note: "Case dismissed without prejudice 2019; oversight runs through federal monitor reporting to U.S. Attorney / HUD" },
  "baez-nycha-mold": { judge: "Hon. Paul A. Engelmayer", judge_note: "S.D.N.Y.; reassigned after Judge Pauley's death in July 2021" },
  "jose-p-doe": { judge: null, judge_note: "Originally Judge Eugene Nickerson (deceased 2002); current assignment not publicly verifiable" },
  "lv-doe-hearing-orders": { judge: "Hon. Loretta A. Preska", judge_note: "Senior status, S.D.N.Y.; issued February 20, 2025 order on IHMS delays" },
  "lv-doe-enforcement": { judge: "Hon. Loretta A. Preska", judge_note: "Senior status, S.D.N.Y." },
  "jsm-doe-due-process": { judge: "Hon. Eric R. Komitee", judge_note: "E.D.N.Y.; Magistrate Judge Roanne L. Mann" },
  "ng-doe-transition": { judge: "Hon. Rachel P. Kovner", judge_note: "E.D.N.Y.; Magistrate Judge Robert M. Levy" },
  "callahan-shelter": { judge: "Hon. Gerald Lebovits", judge_note: "N.Y. Sup. Ct., N.Y. County; supervised 2024 modified Right to Shelter mediation" },
  "callahan-migrant-transfers": { judge: "Hon. Gerald Lebovits", judge_note: "N.Y. Sup. Ct., N.Y. County" },
  "eldredge-shelter-women": { judge: null, judge_note: "Originally Justice Arnold G. Fraiman; enforcement now folded into Callahan framework before Justice Lebovits" },
  "boston-mccain-shelter-families": { judge: null, judge_note: "Originally Justice Helen E. Freedman; family right-to-shelter disputes now consolidated with Callahan before Justice Lebovits" },
  "reynolds-hra": { judge: null, judge_note: "Originally Judge William H. Pauley III (deceased 2021); case effectively closed" },
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
  "council-v-adams-rikers-ice": { judge: "Hon. Mary V. Rosado", judge_note: "N.Y. Sup. Ct., N.Y. County" }
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
    "citation": "20-cv-1097 (S.D.N.Y.)",
    "year_filed": 2020,
    "year_entered": 2025,
    "status": "active",
    "agencies": ["DOE"],
    "issue_area": "Education",
    "court": "S.D.N.Y.",
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
    "citation": "20-cv-9737 (S.D.N.Y.)",
    "year_filed": 2021,
    "year_entered": 2023,
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
    "case_name": "Doe v. City of New York (ACS coercive home-search class action)",
    "citation": "E.D.N.Y. (filed Feb. 21, 2024)",
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
    "citation": "S.D.N.Y. (filed Apr. 30, 2025)",
    "year_filed": 2025,
    "year_entered": null,
    "status": "pending",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
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
    "recent_status": "City's motion to dismiss denied January 2026; discovery and class certification underway; settlement discussions plausible given administration change.",
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
    "citation": "S.D.N.Y. (filed Jan. 2026)",
    "year_filed": 2026,
    "year_entered": null,
    "status": "pending",
    "agencies": ["NYPD"],
    "issue_area": "Policing",
    "court": "S.D.N.Y.",
    "plaintiffs": "NAACP NY State Conference and two Black drivers (NYCLU, Bronx Defenders, NAACP)",
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
    "case_name": "Reid v. New York City Department of Correction (phone surveillance)",
    "citation": "S.D.N.Y. (filed Apr. 2024)",
    "year_filed": 2024,
    "year_entered": null,
    "status": "pending",
    "agencies": ["DOC"],
    "issue_area": "Surveillance",
    "court": "S.D.N.Y.",
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
    "citation": "S.D.N.Y. (filed Oct. 28, 2025)",
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
    "recent_status": "State Supreme Court issued final ruling blocking the executive order in September 2025; possible appeal and continued enforcement litigation through 2026.",
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
    "year_terminated": 1970,
    "status": "historical",
    "agencies": ["HRA"],
    "issue_area": "Public Benefits",
    "court": "U.S. Supreme Court",
    "plaintiffs": "John Kelly and other NYC residents whose public-assistance benefits had been terminated without prior hearing (Mobilization for Youth Legal Services and Center on Social Welfare Policy and Law)",
    "summary": "Landmark Supreme Court decision originating in New York City's welfare system, holding that the Due Process Clause requires an evidentiary hearing before termination of public-assistance benefits. The City's prior practice of cutting benefits first and hearing complaints later was held unconstitutional.",
    "daily_effects": "Goldberg forced HRA to implement pre-termination 'fair hearings' — written notice, opportunity to appear with counsel and witnesses, and a neutral decisionmaker — before stopping cash assistance, Medicaid, food stamps, or shelter benefits. The fair-hearing infrastructure HRA and the State Office of Temporary and Disability Assistance still operate descends directly from this case.",
    "monitor": null,
    "key_obligations": [
      "Provide pre-termination written notice",
      "Permit oral presentation with counsel and witnesses",
      "Decide before a neutral hearing officer",
      "Issue a written decision based on the record"
    ],
    "legacy": "Every aid-continuing fair hearing held under HRA and OTDA procedures today rests on Goldberg; the doctrine of pre-deprivation hearings now reaches Medicaid, SNAP, housing subsidies, and disability benefits.",
    "links": [
      {"label": "Goldberg v. Kelly, 397 U.S. 254 (1970)", "url": "https://supreme.justia.com/cases/federal/us/397/254/"},
      {"label": "NYU Law: Goldberg v. Kelly at 50", "url": "https://www.law.nyu.edu/news/goldberg-v-kelly-50-anniversary"}
    ]
  }
];
