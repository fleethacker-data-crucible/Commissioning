# ATO wording for SULLIVAN's dashboard narration

Researched 2026-11-04 from public sources. Search excerpts only: no page was read in full. Vendor claims are marked.

## What the words mean

- **ATO** is an Authority to Operate. An Authorizing Official grants it after a system is assessed under the Risk Management Framework. A system is not "vetted into" an ATO, it is assessed and then authorized.
- **cATO**, a continuous ATO, replaces the point-in-time assessment with continuous risk monitoring. A system must already hold an ATO and be in the RMF monitor stage first. A 2022 DoD CIO memo calls it a privilege and a gold standard. It can be revoked.
- **Inheritance.** A platform or software factory with its own authorization lets the software built on it inherit security controls, so each application does not repeat the whole process. The DoD DevSecOps Reference Design describes controls inheritance, and the cATO criteria describe a factory with one ATO deploying onto a ship system with another.
- **Navy examples.** Black Pearl is a Navy software factory that says it holds a Navy ATO and that the ATO can be reciprocated. RAISE is described as the Navy's DevSecOps RMF process for fleet software, approved in January 2021 for applications hosted on CANES. Both come from search excerpts.

## Where the user's draft needs care

User draft: "a highly vetted ATO that allows you to ship development repos directly to the fleet as products."

1. "Vetted ATO" is loose. Say the environment is authorized or already holds its Authority to Operate.
2. "Repos" is developer slang. A Navy judge hears "deliver software to the fleet".
3. "Ship ... directly" overpromises. Inheritance removes repeated authorization work. It does not remove review.
4. **Do we claim Periscope holds an ATO?** Unknown. The team's own READMEs say the tools are not accredited. If SCOPE holds no ATO, the line must say what it is built to do, not what it is. Anthony to confirm which is true.

## Decision, 2026-11-04

Anthony: Periscope does not hold an ATO. The concept is that the child software (repos) built inside it can operate under its ATO. So the narration claims the design, never the authorization, and the Bridge Warden demo must not be described as accredited.

Rule for wording: say what the design does, never what the status is ("built so", not "is authorized"), and name the pain it removes (every tool starting its own authorization from zero).

Recorded wording (task 444041), recorded together with the other two SULLIVAN beats so the voice matches:

> "This is Periscope. It's built so one Authority to Operate can cover the software developed inside it. Build once, inherit the controls, and reach the fleet without every tool starting its own authorization from zero."

On screen during the line, small lower-third, plain white: "Design goal. Not yet authorized." Keeps the voice punchy and the claim honest. Judges respect a stated limit more than a caught overreach.

Accuracy note for a cyber reviewer: "operate under" is accurate for software inside the platform's authorization boundary. Software outside the boundary would inherit controls and still be assessed for the rest.

## Candidate lines (superseded by the decision above)

A. Claims the authorization, use only if true:
"This is Periscope. An environment that already holds its Authority to Operate. Build inside it, and what you build inherits its security controls. From a developer's repo to the fleet, without starting the clock over."

B. Claims the design, safe either way:
"This is Periscope. Built to run inside an authorized environment. Build in it, inherit its controls, and get software to the fleet without starting the authorization clock over."

C. Short, for a tight cut:
"This is Periscope. Already authorized to operate. Build in it, inherit its controls, and ship to the fleet."

## Unverified, check before it is spoken

- That Periscope or SCOPE holds, or is covered by, an ATO.
- The 80 percent inherited controls and 3 to 5 day platform ATO figures. Both are vendor claims about Black Pearl, so do not put them on screen or in a line.
- Whether afloat inheritance works as the cATO criteria describe today. No current Navy directive was found.
- That "in a day" (scene C narration) is a vision line, framed as "Imagine", and not a measured claim.

## Sources

- DoD CIO cATO memo: https://dodcio.defense.gov/Portals/0/Documents/Library/20220204-cATO-memo-Signed-Cleared.pdf
- DoD CIO cATO evaluation criteria: https://dodcio.defense.gov/Portals/0/Documents/Library/cATO-EvaluationCriteria.pdf
- DoD Enterprise DevSecOps Reference Design v1.0: https://dodcio.defense.gov/Portals/0/Documents/DoD%20Enterprise%20DevSecOps%20Reference%20Design%20v1.0_Public%20Release.pdf
- Navy Black Pearl white paper: https://blackpearl.navy.mil/wp-content/uploads/2025/09/Black-Pearl-White-Paper.pdf
- DVIDS, NAVWAR risk management framework milestone (RAISE): https://dvidshub.net/news/390244/navwar-meets-milestone-transition-risk-management-framework-achieves-improved-cyber-readiness-navy-wide
- Navy.mil, PEO C4I afloat delivery with a DevOps model: https://www.navy.mil/Press-Office/News-Stories/Article/2253315/peo-c4i-streamlines-afloat-capability-delivery-with-devops-model
