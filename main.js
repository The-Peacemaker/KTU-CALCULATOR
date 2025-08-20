// --- SHARED DATA & CONSTANTS ---
// NCode Written and wibe coded by Benedict Chacko Mathew
const gradePoints = { 'S': 10, 'A+': 9, 'A': 8.5, 'B+': 8, 'B': 7.5, 'C+': 7, 'C': 6.5, 'D': 6, 'P': 5.5 };
const gradeOptions = ['', 'S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'P'];

// Department-specific semester data extracted from ktugpa.web.app (static snapshot)
const departmentSemesters = {
    cs: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 2', subjects: [
            { code: '', name: 'VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 4 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 3 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
            { code: '', name: 'PROGRAMMING IN C', credit: 4 },
        ]},
        { name: 'SEMESTER 3', subjects: [
            { code: '', name: 'DISCRETE MATHEMATICAL STRUCTURES', credit: 4 },
            { code: '', name: 'DATA STRUCTURES', credit: 4 },
            { code: '', name: 'LOGIC SYSTEM DESIGN', credit: 4 },
            { code: '', name: 'OBJECT ORIENTED PROGRAMMING USING JAVA', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: '', name: 'DATA STRUCTURES LAB', credit: 2 },
            { code: '', name: 'OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)', credit: 2 },
        ]},
        { name: 'SEMESTER 4', subjects: [
            { code: '', name: 'GRAPH THEORY', credit: 4 },
            { code: '', name: 'COMPUTER ORGANIZATION AND ARCHITECTURE', credit: 4 },
            { code: '', name: 'DATABASE MANAGEMENT SYSTEMS', credit: 4 },
            { code: '', name: 'OPERATING SYSTEMS', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: '', name: 'DIGITAL LAB', credit: 2 },
            { code: '', name: 'OPERATING SYSTEMS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 5', subjects: [
            { code: '', name: 'FORMAL LANGUAGES AND AUTOMATA THEORY', credit: 4 },
            { code: '', name: 'COMPUTER NETWORKS', credit: 4 },
            { code: '', name: 'SYSTEM SOFTWARE', credit: 4 },
            { code: '', name: 'MICROPROCESSORS AND MICROCONTROLLERS', credit: 4 },
            { code: '', name: 'MANAGEMENT OF SOFTWARE SYSTEMS', credit: 3 },
            { code: '', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: '', name: 'SYSTEM SOFTWARE AND MICROPROCESSORS LAB', credit: 2 },
            { code: '', name: 'DATABASE MANAGEMENT SYSTEMS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 6', subjects: [
            { code: '', name: 'COMPILER DESIGN', credit: 4 },
            { code: '', name: 'COMPUTER GRAPHICS AND IMAGE PROCESSING', credit: 4 },
            { code: '', name: 'ALGORITHM ANALYSIS AND DESIGN', credit: 4 },
            { code: '', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: '', name: 'INDUSTRIAL ECONOMICS & FOREIGN TRADE', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: '', name: 'NETWORKING LAB', credit: 2 },
            { code: '', name: 'MINIPROJECT', credit: 2 },
        ]},
        { name: 'SEMESTER 7', subjects: [
            { code: '', name: 'ARTIFICIAL INTELLIGENCE', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: '', name: 'OPEN ELECTIVE', credit: 3 },
            { code: '', name: 'INDUSTRIAL SAFETY ENGINEERING', credit: 0 },
            { code: '', name: 'COMPILER LAB', credit: 2 },
            { code: '', name: 'SEMINAR', credit: 2 },
            { code: '', name: 'PROJECT PHASE I', credit: 2 },
        ]},
        { name: 'SEMESTER 8', subjects: [
            { code: '', name: 'DISTRIBUTED COMPUTING', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE VIVA', credit: 1 },
            { code: '', name: 'PROJECT PHASE II', credit: 4 },
        ]},
    ],
    ce: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS B / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 2', subjects: [
            { code: '', name: 'VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS B / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
            { code: '', name: 'PROGRAMMING IN C', credit: 4 },
        ]},
        { name: 'SEMESTER 3', subjects: [
            { code: '', name: 'PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS', credit: 4 },
            { code: '', name: 'MECHANICS OF SOLIDS', credit: 4 },
            { code: '', name: 'FLUID MECHANICS & HYDRAULICS', credit: 4 },
            { code: '', name: 'SURVEYING & GEOMATICS', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: '', name: 'CIVIL ENGINEERING PLANNING & DRAFTING LAB', credit: 2 },
            { code: '', name: 'SURVEY LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 4', subjects: [
            { code: '', name: 'PROBABILITY, STATISTICS AND NUMERICAL METHODS', credit: 4 },
            { code: '', name: 'ENGINEERING GEOLOGY', credit: 4 },
            { code: '', name: 'GEOTECHNICAL ENGINEERING – I', credit: 4 },
            { code: '', name: 'TRANSPORTATION ENGINEERING', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: '', name: 'MATERIAL TESTING LAB – I', credit: 2 },
            { code: '', name: 'FLUID MECHANICS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 5', subjects: [
            { code: '', name: 'STRUCTURAL ANALYSIS – I', credit: 4 },
            { code: '', name: 'DESIGN OF CONCRETE STRUCTURES', credit: 4 },
            { code: '', name: 'GEOTECHNICAL ENGINEERING – II', credit: 4 },
            { code: '', name: 'HYDROLOGY & WATER RESOURCES ENGINEERING', credit: 4 },
            { code: '', name: 'CONSTRUCTION TECHNOLOGY & MANAGEMENT', credit: 3 },
            { code: '', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: '', name: 'MATERIAL TESTING LAB – II', credit: 2 },
            { code: '', name: 'GEOTECHNICAL ENGINEERING LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 6', subjects: [
            { code: '', name: 'STRUCTURAL ANALYSIS – II', credit: 4 },
            { code: '', name: 'ENVIRONMENTAL ENGINEERING', credit: 4 },
            { code: '', name: 'DESIGN OF HYDRAULIC STRUCTURES', credit: 4 },
            { code: '', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: '', name: 'INDUSTRIAL ECONOMICS & FOREIGN TRADE', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: '', name: 'TRANSPORTATION ENGINEERING LAB', credit: 2 },
            { code: '', name: 'CIVIL ENGINEERING SOFTWARE LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 7', subjects: [
            { code: '', name: 'DESIGN OF STEEL STRUCTURES', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: '', name: 'OPEN ELECTIVE', credit: 3 },
            { code: '', name: 'INDUSTRIAL SAFETY ENGINEERING', credit: 0 },
            { code: '', name: 'ENVIRONMENTAL ENGG LAB', credit: 2 },
            { code: '', name: 'SEMINAR', credit: 2 },
            { code: '', name: 'PROJECT PHASE I', credit: 2 },
        ]},
        { name: 'SEMESTER 8', subjects: [
            { code: '', name: 'QUANTITY SURVEYING & VALUATION', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: '', name: 'COMPREHENSIVE VIVA VOCE', credit: 1 },
            { code: '', name: 'PROJECT PHASE II', credit: 4 },
        ]},
    ],
    ad: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 2', subjects: [
            { code: '', name: 'VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'PROGRAMMING IN C', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 3', subjects: [
            { code: '', name: 'DISCRETE MATHEMATICAL STRUCTURES', credit: 4 },
            { code: '', name: 'DATA STRUCTURES', credit: 4 },
            { code: '', name: 'LOGIC SYSTEM DESIGN', credit: 4 },
            { code: '', name: 'OBJECT ORIENTED PROGRAMMING USING JAVA', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: '', name: 'DATA STRUCTURES LAB', credit: 2 },
            { code: '', name: 'OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)', credit: 2 },
        ]},
        { name: 'SEMESTER 4', subjects: [
            { code: '', name: 'PROBABILITY AND STATISTICAL MODELING', credit: 4 },
            { code: '', name: 'COMPUTER ORGANISATION AND ARCHITECTURE', credit: 4 },
            { code: '', name: 'DATABASE MANAGEMENT SYSTEMS', credit: 4 },
            { code: '', name: 'OPERATING SYSTEMS', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: '', name: 'PYTHON AND STATISTICAL MODELING LAB', credit: 2 },
            { code: '', name: 'OPERATING SYSTEMS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 5', subjects: [
            { code: '', name: 'FOUNDATIONS OF DATA SCIENCE', credit: 4 },
            { code: '', name: 'COMPUTER NETWORKS', credit: 4 },
            { code: '', name: 'INTRODUCTION TO MACHINE LEARNING', credit: 4 },
            { code: '', name: 'INTRODUCTION TO ARTIFICIAL INTELLIGENCE', credit: 4 },
            { code: '', name: 'MANAGEMENT OF SOFTWARE SYSTEMS', credit: 3 },
            { code: '', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: '', name: 'AI & DATA SCIENCE LAB', credit: 2 },
            { code: '', name: 'DATABASE MANAGEMENT SYSTEMS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 6', subjects: [
            { code: '', name: 'CONCEPTS IN BIG DATA ANALYTICS', credit: 4 },
            { code: '', name: 'ROBOTICS AND INTELLIGENT SYSTEM', credit: 4 },
            { code: '', name: 'ALGORITHM ANALYSIS AND DESIGN', credit: 4 },
            { code: '', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: '', name: 'INDUSTRIAL ECONOMICS & FOREIGN TRADE', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: '', name: 'BIGDATA ANALYTICS LAB', credit: 2 },
            { code: '', name: 'MINIPROJECT', credit: 2 },
        ]},
        { name: 'SEMESTER 7', subjects: [
            { code: '', name: 'FOUNDATIONS OF DEEP LEARNING', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: '', name: 'OPEN ELECTIVE', credit: 3 },
            { code: '', name: 'INDUSTRIAL SAFETY ENGINEERING', credit: 0 },
            { code: '', name: 'DEEP LEARNING LAB', credit: 2 },
            { code: '', name: 'SEMINAR', credit: 2 },
            { code: '', name: 'PROJECT PHASE I', credit: 2 },
        ]},
        { name: 'SEMESTER 8', subjects: [
            { code: '', name: 'BUSINESS ANALYTICS', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE VIVA', credit: 1 },
            { code: '', name: 'PROJECT PHASE II', credit: 4 },
        ]},
    ],
    me: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS B / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'LIFE SKILLS', credit: 0 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 2', subjects: [
            { code: '', name: 'VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS B / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'PROFESSIONAL COMMUNICATION', credit: 0 },
            { code: '', name: 'PROGRAMMING IN C', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 3', subjects: [
            { code: '', name: 'PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS', credit: 4 },
            { code: '', name: 'MECHANICS OF SOLIDS', credit: 4 },
            { code: '', name: 'MECHANICS OF FLUIDS', credit: 4 },
            { code: '', name: 'METALLURGY & MATERIAL SCIENCE', credit: 4 },
            { code: '', name: 'DESIGN AND ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: '', name: 'COMPUTER AIDED MACHINE DRAWING', credit: 2 },
            { code: '', name: 'MATERIALS TESTING LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 4', subjects: [
            { code: '', name: 'PROBABILITY, STATISTICS AND NUMERICAL METHODS', credit: 4 },
            { code: '', name: 'ENGINEERING THERMODYNAMICS', credit: 4 },
            { code: '', name: 'MANUFACTURING PROCESS', credit: 4 },
            { code: '', name: 'FLUID MACHINERY', credit: 4 },
            { code: '', name: 'DESIGN AND ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: '', name: 'FM & HM LAB', credit: 2 },
            { code: '', name: 'MACHINE TOOLS LAB-I', credit: 2 },
        ]},
        { name: 'SEMESTER 5', subjects: [
            { code: '', name: 'MECHANICS OF MACHINERY', credit: 4 },
            { code: '', name: 'THERMAL ENGINEERING', credit: 4 },
            { code: '', name: 'INDUSTRIAL & SYSTEMS ENGINEERING', credit: 4 },
            { code: '', name: 'MACHINE TOOLS AND METROLOGY', credit: 4 },
            { code: '', name: 'INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS', credit: 3 },
            { code: '', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: '', name: 'MACHINE TOOLS LAB-II', credit: 2 },
            { code: '', name: 'THERMAL ENGINEERING LAB-I', credit: 2 },
        ]},
        { name: 'SEMESTER 6', subjects: [
            { code: '', name: 'HEAT & MASS TRANSFER', credit: 4 },
            { code: '', name: 'DYNAMICS AND DESIGN OF MACHINERY', credit: 4 },
            { code: '', name: 'ADVANCED MANUFACTURING ENGINEERING', credit: 4 },
            { code: '', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: '', name: 'INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: '', name: 'COMPUTER AIDED DESIGN & ANALYSIS LAB', credit: 2 },
            { code: '', name: 'THERMAL ENGINEERING LAB-II', credit: 2 },
        ]},
        { name: 'SEMESTER 7', subjects: [
            { code: '', name: 'DESIGN OF MACHINE ELEMENTS', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: '', name: 'OPEN ELECTIVE', credit: 3 },
            { code: '', name: 'INDUSTRIAL SAFETY ENGINEERING', credit: 0 },
            { code: '', name: 'MECHANICAL ENGINEERING LAB', credit: 2 },
            { code: '', name: 'SEMINAR', credit: 2 },
            { code: '', name: 'PROJECT PHASE I', credit: 2 },
        ]},
        { name: 'SEMESTER 8', subjects: [
            { code: '', name: 'MECHATRONICS', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: '', name: 'COMPREHENSIVE VIVA VOCE', credit: 1 },
            { code: '', name: 'PROJECT PHASE II', credit: 4 },
        ]},
    ],
    ec: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'LIFE SKILLS', credit: 0 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 2', subjects: [
            { code: '', name: 'VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'PROFESSIONAL COMMUNICATION', credit: 0 },
            { code: '', name: 'PROGRAMMING IN C', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 3', subjects: [
            { code: '', name: 'PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS', credit: 4 },
            { code: '', name: 'SOLID STATE DEVICES', credit: 4 },
            { code: '', name: 'LOGIC CIRCUIT DESIGN', credit: 4 },
            { code: '', name: 'NETWORK THEORY', credit: 4 },
            { code: '', name: 'DESIGN AND ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: '', name: 'SCIENTIFIC COMPUTING LAB', credit: 2 },
            { code: '', name: 'LOGIC DESIGN LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 4', subjects: [
            { code: '', name: 'PROBABILITY, RANDOM PROCESS AND NUMERICAL METHODS', credit: 4 },
            { code: '', name: 'ANALOG CIRCUITS', credit: 4 },
            { code: '', name: 'SIGNALS AND SYSTEMS', credit: 4 },
            { code: '', name: 'COMPUTER ARCHITECTURE AND MICROCONTROLLERS', credit: 4 },
            { code: '', name: 'DESIGN AND ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: '', name: 'ANALOG CIRCUITS AND SIMULATION LAB', credit: 2 },
            { code: '', name: 'MICROCONTROLLER LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 5', subjects: [
            { code: '', name: 'LINEAR INTEGRATED CIRCUITS', credit: 4 },
            { code: '', name: 'DIGITAL SIGNAL PROCESSING', credit: 4 },
            { code: '', name: 'ANALOG AND DIGITAL COMMUNICATION', credit: 4 },
            { code: '', name: 'CONTROL SYSTEMS', credit: 4 },
            { code: '', name: 'INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS', credit: 3 },
            { code: '', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: '', name: 'ANALOG INTEGRATED CIRCUITS AND SIMULATION LAB', credit: 2 },
            { code: '', name: 'DIGITAL SIGNAL PROCESSING LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 6', subjects: [
            { code: '', name: 'ELECTROMAGNETICS', credit: 4 },
            { code: '', name: 'VLSI CIRCUIT DESIGN', credit: 4 },
            { code: '', name: 'INFORMATION THEORY AND CODING', credit: 4 },
            { code: '', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: '', name: 'INDUSTRIAL ECONOMICS AND FOREIGN TRADE / MANAGEMENT FOR ENGINEERS', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: '', name: 'COMMUNICATION LAB', credit: 2 },
            { code: '', name: 'MINIPROJECT', credit: 2 },
        ]},
        { name: 'SEMESTER 7', subjects: [
            { code: '', name: 'MICROWAVES AND ANTENNAS', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: '', name: 'OPEN ELECTIVE', credit: 3 },
            { code: '', name: 'INDUSTRIAL SAFETY ENGINEERING', credit: 0 },
            { code: '', name: 'ELECTROMAGNETICS LAB', credit: 2 },
            { code: '', name: 'SEMINAR', credit: 2 },
            { code: '', name: 'PROJECT PHASE I', credit: 2 },
        ]},
        { name: 'SEMESTER 8', subjects: [
            { code: '', name: 'WIRELESS COMMUNICATION', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: '', name: 'COMPREHENSIVE VIVA VOCE', credit: 1 },
            { code: '', name: 'PROJECT PHASE II', credit: 4 },
        ]},
    ],
    ee: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'LIFE SKILLS', credit: 0 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 2', subjects: [
            { code: '', name: 'VECTOR CALCULUS, DIFFERENTIAL EQUATIONS AND TRANSFORMS', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS A / ENGINEERING CHEMISTRY', credit: 4 },
            { code: '', name: 'ENGINEERING MECHANICS / ENGINEERING GRAPHICS', credit: 3 },
            { code: '', name: 'BASICS OF CIVIL & MECHANICAL ENGINEERING / BASICS OF ELECTRICAL & ELECTRONICS ENGINEERING', credit: 4 },
            { code: '', name: 'PROFESSIONAL COMMUNICATION', credit: 0 },
            { code: '', name: 'PROGRAMMING IN C', credit: 4 },
            { code: '', name: 'ENGINEERING PHYSICS LAB / ENGINEERING CHEMISTRY LAB', credit: 1 },
            { code: '', name: 'CIVIL & MECHANICAL WORKSHOP / ELECTRICAL & ELECTRONICS WORKSHOP', credit: 1 },
        ]},
        { name: 'SEMESTER 3', subjects: [
            { code: '', name: 'PARTIAL DIFFERENTIAL EQUATION AND COMPLEX ANALYSIS', credit: 4 },
            { code: '', name: 'CIRCUITS AND NETWORKS', credit: 4 },
            { code: '', name: 'MEASUREMENTS AND INSTRUMENTATION', credit: 4 },
            { code: '', name: 'ANALOG ELECTRONICS', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: '', name: 'CIRCUITS AND MEASUREMENTS LAB', credit: 2 },
            { code: '', name: 'ANALOG ELECTRONICS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 4', subjects: [
            { code: '', name: 'PROBABILITY, RANDOM PROCESSES AND NUMERICAL METHODS', credit: 4 },
            { code: '', name: 'DC MACHINES AND TRANSFORMERS', credit: 4 },
            { code: '', name: 'ELECTROMAGNETIC THEORY', credit: 4 },
            { code: '', name: 'DIGITAL ELECTRONICS', credit: 4 },
            { code: '', name: 'DESIGN & ENGINEERING / PROFESSIONAL ETHICS', credit: 2 },
            { code: '', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: '', name: 'ELECTRICAL MACHINES LAB I', credit: 2 },
            { code: '', name: 'DIGITAL ELECTRONICS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 5', subjects: [
            { code: '', name: 'POWER SYSTEMS I', credit: 4 },
            { code: '', name: 'MICROPROCESSORS AND MICROCONTROLLERS', credit: 4 },
            { code: '', name: 'SIGNALS AND SYSTEMS', credit: 4 },
            { code: '', name: 'SYNCHRONOUS AND INDUCTION MACHINES', credit: 4 },
            { code: '', name: 'INDUSTRIAL ECONOMICS & FOREIGN TRADE / MANAGEMENT FOR ENGINEERS', credit: 3 },
            { code: '', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: '', name: 'MICROPROCESSORS AND MICROCONTROLLERS LAB', credit: 2 },
            { code: '', name: 'ELECTRICAL MACHINES LAB II', credit: 2 },
        ]},
        { name: 'SEMESTER 6', subjects: [
            { code: '', name: 'LINEAR CONTROL SYSTEMS', credit: 4 },
            { code: '', name: 'POWER SYSTEMS II', credit: 4 },
            { code: '', name: 'POWER ELECTRONICS', credit: 4 },
            { code: '', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: '', name: 'INDUSTRIAL ECONOMICS & FOREIGN TRADE / MANAGEMENT FOR ENGINEERS', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: '', name: 'POWER SYSTEMS LAB', credit: 2 },
            { code: '', name: 'POWER ELECTRONICS LAB', credit: 2 },
        ]},
        { name: 'SEMESTER 7', subjects: [
            { code: '', name: 'ADVANCED CONTROL SYSTEMS', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: '', name: 'OPEN ELECTIVE', credit: 3 },
            { code: '', name: 'INDUSTRIAL SAFETY ENGINEERING', credit: 0 },
            { code: '', name: 'CONTROL SYSTEMS LAB', credit: 2 },
            { code: '', name: 'SEMINAR', credit: 2 },
            { code: '', name: 'PROJECT PHASE I', credit: 2 },
        ]},
        { name: 'SEMESTER 8', subjects: [
            { code: '', name: 'ELECTRICAL SYSTEM DESIGN AND ESTIMATION', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: '', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: '', name: 'COMPREHENSIVE COURSE VIVA', credit: 1 },
            { code: '', name: 'PROJECT PHASE II', credit: 4 },
        ]},
    ],
    universal: [
        { name: 'SEMESTER 1', subjects: [
            { code: '', name: 'Subject/Course 1', credit: 1 },
            { code: '', name: 'Subject/Course 2', credit: 1 },
            { code: '', name: 'Subject/Course 3', credit: 1 },
        ]},
    ]
};
// Local default semester data (used as fallback)
let semesters = [
    {
        name: 'SEMESTER 1',
        subjects: [
            { code: 'MAT 101', name: 'LINEAR ALGEBRA AND CALCULUS', credit: 4 },
            { code: 'PHT 100', name: 'ENGINEERING CHEMISTRY/PHYSICS', credit: 4 },
            { code: 'EST 100', name: 'ENGINEERING MECHANICS/GRAPHICS', credit: 3 },
            { code: 'EST 120', name: 'BASICS OF CIVIL & MECH/ELEC & ELC', credit: 4 },
            { code: 'PHL 120', name: 'ENGINEERING CHEMISTRY/PHYSICS LAB', credit: 1 },
            { code: 'ESL 120', name: 'CIVIL & MECH/ELEC & ELC WORKSHOP', credit: 1 },
        ],
    },
    {
        name: 'SEMESTER 2',
        subjects: [
            { code: 'MAT 102', name: 'VECTOR CALCULUS, DE AND TRANSFORMS', credit: 4 },
            { code: 'CYT 100', name: 'ENGINEERING CHEMISTRY/PHYSICS', credit: 4 },
            { code: 'EST 110', name: 'ENGINEERING MECHANICS/GRAPHICS', credit: 3 },
            { code: 'EST 130', name: 'BASICS OF CIVIL & MECH/ELEC & ELC', credit: 4 },
            { code: 'EST 102', name: 'PROGRAMMING IN C', credit: 4 },
            { code: 'HUN 102', name: 'PROFESSIONAL COMMUNICATION', credit: 2 },
            { code: 'CYL 120', name: 'ENGINEERING CHEMISTRY/PHYSICS LAB', credit: 1 },
            { code: 'ESL 130', name: 'CIVIL & MECH/ELEC & ELC WORKSHOP', credit: 1 },
        ],
    },
    {
        name: 'SEMESTER 3',
        subjects: [
            { code: 'MAT 203', name: 'DISCRETE MATHEMATICAL STRUCTURES', credit: 4 },
            { code: 'CST 201', name: 'DATA STRUCTURES', credit: 4 },
            { code: 'CST 203', name: 'LOGIC SYSTEM DESIGN', credit: 4 },
            { code: 'CST 205', name: 'OBJECT ORIENTED PROGRAMMING USING JAVA', credit: 4 },
            { code: 'MCN 201', name: 'SUSTAINABLE ENGINEERING', credit: 0 },
            { code: 'CSL 201', name: 'DATA STRUCTURES LAB', credit: 2 },
            { code: 'CSL 203', name: 'OBJECT ORIENTED PROGRAMMING LAB (IN JAVA)', credit: 2 },
        ],
    },
    {
        name: 'SEMESTER 4',
        subjects: [
            { code: 'MAT 206', name: 'GRAPH THEORY', credit: 3 },
            { code: 'CST 202', name: 'COMPUTER ORGANIZATION AND ARCHITECTURE', credit: 4 },
            { code: 'CST 204', name: 'DATABASE MANAGEMENT SYSTEMS', credit: 4 },
            { code: 'CST 206', name: 'OPERATING SYSTEMS', credit: 3 },
            { code: 'MCN 202', name: 'CONSTITUTION OF INDIA', credit: 0 },
            { code: 'CSL 202', name: 'OPERATING SYSTEMS LAB', credit: 2 },
            { code: 'CSL 204', name: 'DATABASE MANAGEMENT SYSTEMS LAB', credit: 2 },
        ],
    },
    {
        name: 'SEMESTER 5',
        subjects: [
            { code: 'CST 301', name: 'THEORY OF COMPUTATION', credit: 4 },
            { code: 'CST 303', name: 'COMPUTER NETWORKS', credit: 4 },
            { code: 'CST 305', name: 'SYSTEM SOFTWARE', credit: 3 },
            { code: 'CST 307', name: 'MICROPROCESSORS AND MICROCONTROLLERS', credit: 3 },
            { code: 'CST XXX', name: 'PROGRAM ELECTIVE I', credit: 3 },
            { code: 'MCN 301', name: 'DISASTER MANAGEMENT', credit: 0 },
            { code: 'CSL 331', name: 'SYSTEM SOFTWARE AND NETWORKING LAB', credit: 2 },
            { code: 'CSD 333', name: 'MINIPROJECT', credit: 2 },
        ],
    },
    {
        name: 'SEMESTER 6',
        subjects: [
            { code: 'CST 302', name: 'COMPILER DESIGN', credit: 4 },
            { code: 'CST 304', name: 'COMPUTER GRAPHICS AND IMAGE PROCESSING', credit: 4 },
            { code: 'CST 306', name: 'ALGORITHM ANALYSIS AND DESIGN', credit: 4 },
            { code: 'CST XXX', name: 'PROGRAM ELECTIVE II', credit: 3 },
            { code: 'HUT 300', name: 'INDUSTRIAL ECONOMICS & FOREIGN TRADE', credit: 3 },
            { code: 'CST 308', name: 'COMPREHENSIVE COURSE WORK', credit: 1 },
            { code: 'CSL 332', name: 'NETWORKING LAB', credit: 2 },
            { code: 'CSD 334', name: 'MINIPROJECT', credit: 2 },
        ],
    },
    {
        name: 'SEMESTER 7',
        subjects: [
            { code: 'CST 401', name: 'ARTIFICIAL INTELLIGENCE', credit: 3 },
            { code: 'CST XXX', name: 'PROGRAM ELECTIVE III', credit: 3 },
            { code: 'XXX XXX', name: 'OPEN ELECTIVE', credit: 3 },
            { code: 'CSL 411', name: 'COMPILER LAB', credit: 2 },
            { code: 'CSD 413', name: 'PROJECT PHASE I', credit: 2 },
        ],
    },
    {
        name: 'SEMESTER 8',
        subjects: [
            { code: 'CST 402', name: 'COMPREHENSIVE VIVA', credit: 3 },
            { code: 'CST XXX', name: 'PROGRAM ELECTIVE IV', credit: 3 },
            { code: 'CST XXX', name: 'PROGRAM ELECTIVE V', credit: 3 },
            { code: 'MCN 401', name: 'INDUSTRIAL SAFETY', credit: 0 },
            { code: 'CSD 416', name: 'PROJECT PHASE 2', credit: 12 },
        ],
    },
];

// Helper: clear and re-render semesters container
function clearSemestersContainer() {
    if (!semestersContainer) return;
    semestersContainer.innerHTML = '';
}

// --- TAB HANDLING LOGIC ---
const tabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const indicator = document.getElementById('tab-active-indicator');
const rootStyle = document.documentElement.style;

function updateIndicator(activeEl) {
    if (!indicator || !activeEl) return;
    const nav = activeEl.parentElement;
    const buttons = Array.from(nav.querySelectorAll('.tab-btn'));
    const idx = buttons.indexOf(activeEl);
    const navRect = nav.getBoundingClientRect();
    const btnRect = activeEl.getBoundingClientRect();
    const left = btnRect.left - navRect.left + 6; // match CSS left padding
    const width = btnRect.width - 12; // subtract paddings
    indicator.style.transform = `translateX(${left}px)`;
    indicator.style.width = `${width}px`;
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('border-cyan-500', 'text-cyan-400', 'is-active');
            item.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-300');
        });
        tab.classList.add('border-cyan-500', 'text-cyan-400', 'is-active');
        tab.classList.remove('border-transparent', 'text-gray-500', 'hover:text-gray-300');
        const targetId = tab.id.replace('tab-', 'content-');
        tabContents.forEach(content => {
            content.id === targetId ? content.classList.add('active') : content.classList.remove('active');
        });
        updateIndicator(tab);
    });
});

// Position indicator on load and on resize
window.addEventListener('load', () => {
    const defaultActive = document.querySelector('.tab-btn.is-active') || document.querySelector('.tab-btn');
    updateIndicator(defaultActive);
});
// debounce indicator reposition to avoid thrash on resize
let __ktu_indicator_resize_timer = null;
window.addEventListener('resize', () => {
    clearTimeout(__ktu_indicator_resize_timer);
    __ktu_indicator_resize_timer = setTimeout(() => {
        const active = document.querySelector('.tab-btn.is-active');
        if (active) updateIndicator(active);
    }, 120);
});
// Legacy gradient pointer/idle animation removed — particle canvas is used for background rendering

// --- ENGINEERING NODES BACKGROUND (shapes, nodes, and faint blueprint grid) ---
(() => {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    let nodes = [];
    const MAX_NODES = Math.floor((w * h) / 12000); // lower density for shapes
    const MOUSE = { x: w / 2, y: h / 2 };
    let animationId = null;

    function rand(min, max) { return Math.random() * (max - min) + min; }

    let NODE_FILL = getComputedStyle(document.documentElement).getPropertyValue('--particle-fill').trim() || '#a0dcff';
    let NODE_STROKE = getComputedStyle(document.documentElement).getPropertyValue('--particle-stroke').trim() || '#78b4ff';
    let CANVAS_CENTER = getComputedStyle(document.documentElement).getPropertyValue('--canvas-center').trim() || 'rgba(10,14,20,0.7)';
    let CANVAS_EDGE = getComputedStyle(document.documentElement).getPropertyValue('--canvas-edge').trim() || 'rgba(3,6,10,0.95)';

    function refreshParticleColors() {
        NODE_FILL = getComputedStyle(document.documentElement).getPropertyValue('--particle-fill').trim() || NODE_FILL;
        NODE_STROKE = getComputedStyle(document.documentElement).getPropertyValue('--particle-stroke').trim() || NODE_STROKE;
        CANVAS_CENTER = getComputedStyle(document.documentElement).getPropertyValue('--canvas-center').trim() || CANVAS_CENTER;
        CANVAS_EDGE = getComputedStyle(document.documentElement).getPropertyValue('--canvas-edge').trim() || CANVAS_EDGE;
    }

    // Node types render different geometric shapes
    function Node(x, y, size, type) {
        this.x = x; this.y = y; this.size = size; this.type = type || 'dot';
        this.vx = rand(-0.05, 0.05); this.vy = rand(-0.05, 0.05);
        this.alpha = rand(0.35, 0.9);
        this.phase = rand(0, Math.PI*2);
    }

    Node.prototype.update = function(dt) {
        // slow drift + subtle bob (gives organic engineering motion)
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.phase += 0.01 * dt;
        this.y += Math.sin(this.phase) * 0.02 * dt;

        // mild mouse attraction within radius
        const dx = (MOUSE.x - this.x);
        const dy = (MOUSE.y - this.y);
        const dist2 = dx*dx + dy*dy;
        if (dist2 < 16000) {
            const f = (1 - dist2 / 16000) * 0.03 * dt;
            this.x += dx * f;
            this.y += dy * f;
        }

        // wrap
        if (this.x < -40) this.x = w + 40;
        if (this.x > w + 40) this.x = -40;
        if (this.y < -40) this.y = h + 40;
        if (this.y > h + 40) this.y = -40;
    };

    Node.prototype.draw = function(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = this.alpha;
        const fill = `rgba(${hexToRgb(NODE_FILL)},${this.alpha})`;
        const stroke = `rgba(${hexToRgb(NODE_STROKE)},${Math.min(0.95, this.alpha + 0.05)})`;
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1.2;
        const s = this.size;
        if (this.type === 'hex') {
            const n = 6; const r = s;
            ctx.beginPath();
            for (let i=0;i<n;i++) {
                const a = (i / n) * Math.PI * 2 + Math.PI/6;
                const px = Math.cos(a) * r, py = Math.sin(a) * r;
                i===0?ctx.moveTo(px,py):ctx.lineTo(px,py);
            }
            ctx.closePath(); ctx.fill(); ctx.stroke();
        } else if (this.type === 'tri') {
            ctx.beginPath(); ctx.moveTo(0,-s); ctx.lineTo(s, s); ctx.lineTo(-s, s); ctx.closePath(); ctx.fill(); ctx.stroke();
        } else if (this.type === 'square') {
            ctx.beginPath(); ctx.rect(-s,-s, s*2, s*2); ctx.fill(); ctx.stroke();
        } else {
            // dot
            ctx.beginPath(); ctx.arc(0,0, s, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        }
        ctx.restore();
    };

    function hexToRgb(hex) {
        hex = hex.replace('#','').trim();
        if (hex.length === 3) hex = hex.split('').map(c=>c+c).join('');
        const num = parseInt(hex,16);
        const r = (num >> 16) & 255;
        const g = (num >> 8) & 255;
        const b = num & 255;
        return `${r},${g},${b}`;
    }

    function initNodes() {
        nodes = [];
        const count = Math.min(80, Math.max(30, MAX_NODES));
        const types = ['dot','hex','tri','square'];
        for (let i = 0; i < count; i++) {
            const x = rand(0,w); const y = rand(0,h);
            const size = rand(1.2, 6) * (DPR>1?1.2:1);
            const type = types[Math.floor(rand(0, types.length))];
            nodes.push(new Node(x,y,size,type));
        }
    }

    function resize() {
        w = canvas.width = Math.floor(window.innerWidth * DPR);
        h = canvas.height = Math.floor(window.innerHeight * DPR);
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
        initNodes();
    }

    function drawGrid() {
        // faint engineering grid with axis lines
        const spacing = 60;
        ctx.save();
        ctx.lineWidth = 0.4; ctx.strokeStyle = 'rgba(255,255,255,0.03)';
        for (let x = 0; x < window.innerWidth; x += spacing) {
            ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x, window.innerHeight); ctx.stroke();
        }
        for (let y = 0; y < window.innerHeight; y += spacing) {
            ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(window.innerWidth, y); ctx.stroke();
        }
        // center axes
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(120,200,255,0.06)';
        ctx.beginPath(); ctx.moveTo(window.innerWidth/2,0); ctx.lineTo(window.innerWidth/2, window.innerHeight); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, window.innerHeight/2); ctx.lineTo(window.innerWidth, window.innerHeight/2); ctx.stroke();
        ctx.restore();
    }

    function clear() {
        ctx.clearRect(0,0,canvas.width,canvas.height);
        const g = ctx.createRadialGradient(w/2, h/2, Math.min(w,h)*0.05, w/2, h/2, Math.max(w,h));
        g.addColorStop(0, CANVAS_CENTER.replace(/"/g,''));
        g.addColorStop(1, CANVAS_EDGE.replace(/"/g,''));
        ctx.fillStyle = g; ctx.fillRect(0,0,w,h);
    }

    let last = performance.now();
    function tick(now) {
        const dt = Math.min(48, now - last) / 16.666; last = now;
        clear();
        drawGrid();

        // small symbolic glyphs for 'engineer vibe'
        ctx.save(); ctx.fillStyle = 'rgba(255,255,255,0.03)'; ctx.font = '14px "Space Mono", monospace';
        const glyphs = ['∑','∫','λ','ƒ','sin','cos','√'];
        for (let i=0;i<6;i++) {
            const gx = (i * 97 + 43) % window.innerWidth;
            const gy = (i * 61 + 121) % window.innerHeight;
            ctx.fillText(glyphs[i % glyphs.length], gx, gy);
        }
        ctx.restore();

        // update & draw nodes
        for (let n of nodes) { n.update(dt); n.draw(ctx); }

        // draw soft links between nearby nodes
        ctx.lineWidth = 0.9;
        for (let i=0;i<nodes.length;i++){
            for (let j=i+1;j<nodes.length;j++){
                const a = nodes[i], b = nodes[j];
                const dx = a.x - b.x, dy = a.y - b.y; const d2 = dx*dx+dy*dy;
                if (d2 < 22000) {
                    const alpha = 0.09 * (1 - d2/22000);
                    ctx.strokeStyle = `rgba(${hexToRgb(NODE_STROKE)},${alpha})`;
                    ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
                }
            }
        }

        animationId = requestAnimationFrame(tick);
    }

    function onMove(e) { MOUSE.x = e.clientX * DPR; MOUSE.y = e.clientY * DPR; }
    function onLeave() { MOUSE.x = w/2; MOUSE.y = h/2; }

    // init
    resize();
    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerleave', onLeave);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) animationId = requestAnimationFrame(tick);
    else for (let n of nodes) n.draw(ctx);

})();

// --- CGPA CALCULATOR LOGIC ---
const semestersContainer = document.getElementById('semesters-container');
const cgpaDisplay = document.getElementById('cgpa-display');
const creditsDisplay = document.getElementById('credits-display');
const resetButtonCGPA = document.getElementById('reset-button-cgpa');

function updateAllCGPACalculations() {
    let cumulativeCreditPoints = 0, cumulativeCredits = 0, finalCgpa = 0;
    semesters.forEach((semester, semIndex) => {
        let semesterCreditPoints = 0, semesterCredits = 0;
        semester.subjects.forEach((subject, subIndex) => {
            const grade = document.getElementById(`sem-${semIndex}-sub-${subIndex}`).value;
            if (grade && gradePoints.hasOwnProperty(grade) && subject.credit > 0) {
                semesterCreditPoints += subject.credit * gradePoints[grade];
                semesterCredits += subject.credit;
            }
        });
        const sgpa = semesterCredits > 0 ? (semesterCreditPoints / semesterCredits) : 0;
        document.getElementById(`sgpa-${semIndex}`).textContent = sgpa.toFixed(2);
        cumulativeCreditPoints += semesterCreditPoints;
        cumulativeCredits += semesterCredits;
        const cgpaUntil = cumulativeCredits > 0 ? (cumulativeCreditPoints / cumulativeCredits) : 0;
        document.getElementById(`cgpa-until-${semIndex}`).textContent = cgpaUntil.toFixed(2);
        if (cumulativeCredits > 0) finalCgpa = cgpaUntil;
    });
    cgpaDisplay.textContent = finalCgpa.toFixed(2);
    creditsDisplay.textContent = cumulativeCredits;
}

function resetCGPACalculator() {
    document.querySelectorAll('.grade-select').forEach(select => select.value = '');
    updateAllCGPACalculations();
}

function renderSemesters() {
    clearSemestersContainer();
    semesters.forEach((semester, semesterIndex) => {
        const semesterCard = document.createElement('div');
        semesterCard.className = 'bg-gray-800 p-5 rounded-lg shadow-md semester-card';
        const subjectsHTML = semester.subjects.map((subject, subjectIndex) => `
            <div class="grid grid-cols-10 gap-2 items-center py-2 border-b border-gray-700 last:border-b-0">
                <div class="col-span-6"><p class="font-medium text-white truncate" title="${subject.code} - ${subject.name}">${subject.code} - ${subject.name}</p><p class="text-xs text-gray-400">Credits: ${subject.credit}</p></div>
                <div class="col-span-4"><select id="sem-${semesterIndex}-sub-${subjectIndex}" ${subject.credit <= 0 ? 'disabled aria-disabled="true" title="Zero credit / audit course" class="grade-select select-disabled w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 p-2.5"' : 'class="grade-select w-full bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 p-2.5"'}>${gradeOptions.map(g => `<option value="${g}">${g || 'Grade'}</option>`).join('')}</select></div>
            </div>`).join('');
        semesterCard.innerHTML = `
            <div class="flex justify-between items-center mb-4">
                <h3 class="text-xl font-bold text-white">${semester.name}</h3>
                <div class="flex gap-4 text-right">
                    <div><span class="text-sm font-medium text-cyan-400">SGPA</span><p id="sgpa-${semesterIndex}" class="text-2xl font-bold text-white">0.00</p></div>
                    <div><span class="text-sm font-medium text-amber-400">CGPA Until</span><p id="cgpa-until-${semesterIndex}" class="text-2xl font-bold text-white">0.00</p></div>
                </div>
            </div><div class="space-y-2">${subjectsHTML}</div>`;
        semestersContainer.appendChild(semesterCard);
    });
}

// --- Department loading (embedded data only) ---
const departmentSelect = document.getElementById('department-select');
function loadDepartment(deptKey) {
    if (departmentSemesters.hasOwnProperty(deptKey)) {
        semesters = JSON.parse(JSON.stringify(departmentSemesters[deptKey]));
    } else {
        semesters = JSON.parse(JSON.stringify(departmentSemesters['cs']));
    }
    renderSemesters();
    updateAllCGPACalculations();
}

if (departmentSelect) {
    try {
        const saved = localStorage.getItem('ktucalc:department');
        if (saved && departmentSemesters.hasOwnProperty(saved)) departmentSelect.value = saved;
    } catch (e) {}

    departmentSelect.addEventListener('change', (e) => {
        const v = e.target.value;
        try { localStorage.setItem('ktucalc:department', v); } catch (e) {}
        loadDepartment(v);
    });
    loadDepartment(departmentSelect.value || 'cs');
}

// --- INTERNAL MARK CALCULATOR LOGIC (UPDATED) ---
const internalInputs = document.querySelectorAll('.internal-input');
const internalTotalDisplay = document.getElementById('internal-total');

function calculateInternalMarks() {
    const s1 = parseFloat(document.getElementById('series1').value) || 0;
    const s2 = parseFloat(document.getElementById('series2').value) || 0;
    const assign1 = parseFloat(document.getElementById('assignment1').value) || 0;
    const assign2 = parseFloat(document.getElementById('assignment2').value) || 0;
    const attendPercent = parseFloat(document.getElementById('attendance').value) || 0;

    // Series average (out of 50, then scaled to 25)
    const seriesAvg = (s1 + s2) / 2;
    const seriesMarks = (seriesAvg / 50) * 25;

    // Assignment total (out of 30, then scaled to 15)
    const assignmentTotal = assign1 + assign2;
    const assignmentMarks = (assignmentTotal / 30) * 15;

    // Attendance marks (out of 10)
    let attendanceMarks = 0;
    if (attendPercent >= 90) {
        attendanceMarks = 10;
    } else if (attendPercent >= 80) {
        attendanceMarks = 8;
    } else if (attendPercent >= 75) {
        attendanceMarks = 6;
    }

    // Total internal mark (capped at 50)
    const totalInternal = Math.min(50, seriesMarks + assignmentMarks + attendanceMarks);
    
    internalTotalDisplay.textContent = `${totalInternal.toFixed(2)} / 50`;
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    // Init CGPA Calc
    renderSemesters();
    semestersContainer.addEventListener('change', (event) => {
        if (event.target.classList.contains('grade-select')) updateAllCGPACalculations();
    });
    resetButtonCGPA.addEventListener('click', resetCGPACalculator);

    // Init Internal Calc
    internalInputs.forEach(input => {
        input.addEventListener('input', calculateInternalMarks);
    });

    // Ensure particle colors match the current theme on init
    if (typeof refreshParticleColors === 'function') try { refreshParticleColors(); } catch(e){}

    // Keyboard navigation for tabs (left/right arrows)
    document.addEventListener('keydown', (e) => {
        const active = document.querySelector('.tab-btn.is-active');
        if (!active) return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const buttons = Array.from(document.querySelectorAll('.tab-btn'));
            const idx = buttons.indexOf(active);
            let nextIdx = idx;
            if (e.key === 'ArrowRight') nextIdx = (idx + 1) % buttons.length;
            else nextIdx = (idx - 1 + buttons.length) % buttons.length;
            buttons[nextIdx].click();
            buttons[nextIdx].focus();
        }
    });
});
