import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const STORAGE_FILE = path.join(__dirname, '..', 'data_storage.json');

const getDefaultData = () => {
  const ts = Date.now();
  return {
    users: [
      {
        _id: 'usr_farmer_1',
        fullName: 'Ramesh Mahto (Farmer)',
        mobileNumber: '9876543210',
        email: 'ramesh.farmer@samadhansetu.gov.in',
        role: 'Citizen',
        state: 'Jharkhand',
        organization: 'Kanke Gram Panchayat',
      },
      {
        _id: 'usr_univ_1',
        fullName: 'Prof. Dr. Sunita Sharma',
        mobileNumber: '9876543211',
        email: 'sunita.sharma@nitjsr.ac.in',
        role: 'University',
        state: 'Jharkhand',
        organization: 'NIT Jamshedpur',
        skills: ['Water Engineering', 'Environmental Science', 'IoT Sensing'],
      },
      {
        _id: 'usr_ind_1',
        fullName: 'Vikas Agarwal (CSR Head)',
        mobileNumber: '9876543212',
        email: 'vikas.agarwal@tataprojects.com',
        role: 'Industry',
        state: 'Jharkhand',
        organization: 'Tata Projects Ltd',
      },
      {
        _id: 'usr_gov_1',
        fullName: 'Amit Tirkey (District Collector)',
        mobileNumber: '9876543213',
        email: 'dc.ranchi@jharkhand.gov.in',
        role: 'Government',
        state: 'Jharkhand',
        organization: 'District Administration Ranchi',
      },
    ],
    challenges: [
      {
        _id: `chal_${ts}_1`,
        title: 'Groundwater Arsenic & Turbidity Contamination',
        description: 'High arsenic content (>0.05 mg/L) detected in deep tube-wells across 8 panchayats. Immediate filtration & IoT water quality monitoring needed.',
        domain: 'Water & Sanitation',
        priority: 'High',
        priorityScore: 9.4,
        district: 'Ranchi',
        state: 'Jharkhand',
        location: { type: 'Point', coordinates: [85.3240, 23.3441] },
        reportCount: 14,
        suggestedExpertise: 'Environmental & Chemical Engineering',
        assignedDepartment: 'Drinking Water & Sanitation Dept (DWSD)',
        aiSummary: 'High arsenic contamination affecting 8 panchayats. Immediate filtration and IoT monitoring required.',
        keywords: ['arsenic', 'groundwater', 'contamination', 'tube-well', 'filtration'],
        status: 'Government Verification',
        governmentAction: '',
        governmentNote: '',
        governmentOfficer: '',
        governmentActionAt: null,
        sanctionedAt: null,
        universityName: '',
        fundingSources: [],
        isIndustryFunded: false,
        industrySponsor: '',
        industryFundingAmount: '',
        createdAt: new Date().toISOString(),
      },
      {
        _id: `chal_${ts}_2`,
        title: 'Late Blight Disease in Plateau Potato Farming',
        description: 'Fungal outbreak destroying 60% of seed potato yields in Kanke block. Farmers need affordable solar spore traps and localized weather forecasting.',
        domain: 'Agriculture',
        priority: 'Medium',
        priorityScore: 7.2,
        district: 'Hazaribagh',
        state: 'Jharkhand',
        location: { type: 'Point', coordinates: [85.3585, 23.9961] },
        reportCount: 8,
        suggestedExpertise: 'Agronomy & Embedded IoT Systems',
        assignedDepartment: 'Department of Agriculture & Sugarcane',
        aiSummary: 'Fungal blight affecting potato yield. Solar spore traps and IoT weather forecasting recommended.',
        keywords: ['blight', 'fungal', 'potato', 'crop', 'farmers', 'yield'],
        status: 'Sanctioned',
        governmentAction: 'Sanction',
        governmentNote: 'Approved for university innovation — high agricultural impact',
        governmentOfficer: 'District Collector, Hazaribagh',
        governmentActionAt: new Date().toISOString(),
        sanctionedAt: new Date().toISOString(),
        universityName: '',
        fundingSources: ['Government Grant'],
        isIndustryFunded: false,
        industrySponsor: '',
        industryFundingAmount: '',
        createdAt: new Date().toISOString(),
      },
      {
        _id: `chal_${ts}_3`,
        title: 'Solar Cold-Storage for Forest Produce',
        description: 'Tribal minor forest produce (Mahua, Lac) spoiling before reaching regional haats. Village federations request decentralized phase-change cold storages.',
        domain: 'Renewable Energy',
        priority: 'High',
        priorityScore: 8.8,
        district: 'East Singhbhum',
        state: 'Jharkhand',
        location: { type: 'Point', coordinates: [86.2029, 22.8046] },
        reportCount: 11,
        suggestedExpertise: 'Thermal Engineering & Solar Microgrids',
        assignedDepartment: 'Jharkhand Renewable Energy Development Agency (JREDA)',
        aiSummary: 'Forest produce spoiling due to no cold storage. Phase-change solar cold storage recommended.',
        keywords: ['cold storage', 'solar', 'tribal', 'forest produce', 'mahua'],
        status: 'University Matched',
        governmentAction: 'Sanction',
        governmentNote: 'Critical tribal livelihood issue — sanctioned for immediate university intervention',
        governmentOfficer: 'DC East Singhbhum',
        governmentActionAt: new Date().toISOString(),
        sanctionedAt: new Date().toISOString(),
        universityName: 'NIT Jamshedpur',
        universityAppliedAt: new Date().toISOString(),
        fundingSources: ['Government Grant', 'Tata Steel CSR'],
        isIndustryFunded: true,
        industrySponsor: 'Tata Steel CSR',
        industryFundingAmount: '₹10,00,000',
        createdAt: new Date().toISOString(),
      },
      {
        _id: `chal_${ts}_4`,
        title: 'Smart Fluoride Filtration & Telemetry in Palamu',
        description: 'Fluorosis detected in 12 schools in Palamu district. Verified authentic by DWSD. Awaiting CSR/Industry grant to initiate university prototyping.',
        domain: 'Healthcare',
        priority: 'High',
        priorityScore: 9.1,
        district: 'Palamu',
        state: 'Jharkhand',
        location: { type: 'Point', coordinates: [84.0715, 24.0378] },
        reportCount: 9,
        suggestedExpertise: 'Biomedical & Environmental Engineering',
        assignedDepartment: 'Department of Health & DWSD',
        aiSummary: 'Severe fluorosis verified in rural schools. Need activated alumina filtration prototype.',
        keywords: ['fluoride', 'filtration', 'drinking water', 'fluorosis', 'telemetry'],
        status: 'Approved',
        governmentAction: 'Approve',
        governmentNote: 'Verified authentic field emergency by DWSD. Approved for industry CSR co-funding.',
        governmentOfficer: 'District Magistrate, Palamu',
        governmentActionAt: new Date().toISOString(),
        sanctionedAt: null,
        universityName: '',
        fundingSources: [],
        isIndustryFunded: false,
        industrySponsor: '',
        industryFundingAmount: '',
        createdAt: new Date().toISOString(),
      },
      {
        _id: `chal_${ts}_5`,
        title: 'Decentralized Micro-Hydro for Irrigation in Simdega',
        description: 'Small perennial streams flowing through tribal hamlets lack lifting pumps. Verified authentic by Irrigation Dept and funded by Tata Projects CSR.',
        domain: 'Infrastructure',
        priority: 'Medium',
        priorityScore: 7.8,
        district: 'Simdega',
        state: 'Jharkhand',
        location: { type: 'Point', coordinates: [84.5000, 22.6167] },
        reportCount: 6,
        suggestedExpertise: 'Civil & Hydro-Mechanical Engineering',
        assignedDepartment: 'Water Resources Department',
        aiSummary: 'Micro-hydro run-of-the-river lift irrigation for tribal farmers. CSR funded and verified.',
        keywords: ['micro-hydro', 'irrigation', 'lift pump', 'tribal farming', 'stream'],
        status: 'Approved',
        governmentAction: 'Approve',
        governmentNote: 'Approved as genuine high-priority irrigation project.',
        governmentOfficer: 'Deputy Commissioner, Simdega',
        governmentActionAt: new Date().toISOString(),
        sanctionedAt: null,
        universityName: '',
        fundingSources: ['Tata Projects CSR (₹14,50,000)'],
        isIndustryFunded: true,
        industrySponsor: 'Tata Projects CSR',
        industryFundingAmount: '₹14,50,000',
        createdAt: new Date().toISOString(),
      },
    ],
    reports: [
      { _id: 'rep_1', challengeId: `chal_${ts}_1`, citizenName: 'Ramu Singh', problemText: 'High arsenic content (>0.05 mg/L) detected in deep tube-wells across 8 panchayats.', locationName: 'Ranchi, Jharkhand', perceivedSeverity: 'High', createdAt: new Date().toISOString() },
      { _id: 'rep_2', challengeId: `chal_${ts}_2`, citizenName: 'Kalyan Mahato', problemText: 'Fungal outbreak destroying 60% of seed potato yields in Kanke block.', locationName: 'Hazaribagh, Jharkhand', perceivedSeverity: 'Medium', createdAt: new Date().toISOString() },
      { _id: 'rep_3', challengeId: `chal_${ts}_3`, citizenName: 'Sunita Oraon', problemText: 'Tribal minor forest produce (Mahua, Lac) spoiling before reaching regional haats.', locationName: 'East Singhbhum, Jharkhand', perceivedSeverity: 'High', createdAt: new Date().toISOString() },
      { _id: 'rep_4', challengeId: `chal_${ts}_4`, citizenName: 'Anand Kumar', problemText: 'Fluorosis detected in 12 schools in Palamu district.', locationName: 'Palamu, Jharkhand', perceivedSeverity: 'High', createdAt: new Date().toISOString() },
      { _id: 'rep_5', challengeId: `chal_${ts}_5`, citizenName: 'Birsa Munda', problemText: 'Small perennial streams flowing through tribal hamlets lack lifting pumps.', locationName: 'Simdega, Jharkhand', perceivedSeverity: 'Medium', createdAt: new Date().toISOString() },
    ],
    workspaces: [
      {
        _id: 'ws_clean_water_1',
        title: 'Clean Water Project — Village X',
        challengeId: `chal_${ts}_1`,
        domain: 'Water & Sanitation',
        status: 'In Progress',
        currentPhase: 'Prototype',
        progressPercentage: 60,
        location: 'Jharkhand (Kanke Block)',
        team: {
          university: 'NIT Jamshedpur',
          industry: 'Tata Projects',
          government: 'Jharkhand Govt (DWSD)',
          community: 'Community Village X',
        },
        tasks: [
          { id: 1, title: 'Survey completed', date: '12 Aug 2026', done: true, stage: 1 },
          { id: 2, title: 'Water testing (Arsenic & TDS)', date: '18 Aug 2026', done: true, stage: 1 },
          { id: 3, title: 'Prototype development (Activated Alumina)', date: 'In Progress', done: true, stage: 2 },
          { id: 4, title: 'Field pilot trial sanction', date: 'Pending', done: false, stage: 3 },
          { id: 5, title: 'Community Handover & Deployment', date: 'Pending', done: false, stage: 4 },
        ],
        hardwareBom: [
          { item: 'Activated Alumina Filter Cartridge', quantity: 2, cost: 4500 },
          { item: 'Solar DC Water Pump 0.5 HP', quantity: 1, cost: 18000 },
        ],
      },
    ],
    auditLogs: [
      { _id: 'audit_1', officerName: 'District Collector, Hazaribagh', action: 'Sanction', challengeId: `chal_${ts}_2`, challengeTitle: 'Late Blight Disease in Plateau Potato Farming', note: 'Approved for university innovation — high agricultural impact', timestamp: new Date().toISOString() },
      { _id: 'audit_2', officerName: 'DC East Singhbhum', action: 'Sanction', challengeId: `chal_${ts}_3`, challengeTitle: 'Solar Cold-Storage for Forest Produce', note: 'Critical tribal livelihood issue — sanctioned for immediate university intervention', timestamp: new Date().toISOString() },
      { _id: 'audit_3', officerName: 'District Magistrate, Palamu', action: 'Approve', challengeId: `chal_${ts}_4`, challengeTitle: 'Smart Fluoride Filtration & Telemetry in Palamu', note: 'Verified authentic field emergency by DWSD. Approved for industry CSR co-funding.', timestamp: new Date().toISOString() },
      { _id: 'audit_4', officerName: 'Deputy Commissioner, Simdega', action: 'Approve', challengeId: `chal_${ts}_5`, challengeTitle: 'Decentralized Micro-Hydro for Irrigation in Simdega', note: 'Approved as genuine high-priority irrigation project.', timestamp: new Date().toISOString() },
    ],
  };
};

let cachedData = null;

export function loadStorageData() {
  if (cachedData) return cachedData;
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const raw = fs.readFileSync(STORAGE_FILE, 'utf-8');
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.challenges) && parsed.challenges.length > 0) {
        cachedData = parsed;
        return cachedData;
      }
    }
  } catch (err) {
    console.warn('Notice: Error reading data_storage.json, resetting to initial seed:', err.message);
  }

  // Generate and save default seed dataset
  cachedData = getDefaultData();
  saveStorageData(cachedData);
  return cachedData;
}

export function saveStorageData(data) {
  try {
    cachedData = data;
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save to data_storage.json:', err.message);
  }
}
