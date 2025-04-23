
// DropDeck Crypto Airdrop Tracker
// All data is stored in local storage

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize app
    initApp();
});

// ===== DATA MANAGEMENT =====

// Default projects data
const defaultProjects = [
    {
        id: "blockmesh",
        name: "Blockmesh",
        logo: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
        description: "Decentralized mesh network protocol for secure communications",
        tags: ["testnet", "defi"],
        tge: "Q3 2023",
        funding: "$25M",
        reward: "Token Airdrop",
        type: "Infrastructure",
        social: {
            twitter: "https://twitter.com/blockmesh",
            telegram: "https://t.me/blockmesh",
            website: "https://blockmesh.io",
            discord: "https://discord.gg/blockmesh"
        },
        joinLink: "https://blockmesh.io/join"
    },
    {
        id: "taker",
        name: "Taker",
        logo: "https://cryptologos.cc/logos/solana-sol-logo.png",
        description: "Cross-chain liquidity protocol for DeFi transactions",
        tags: ["testnet", "amm"],
        tge: "Q2 2023",
        funding: "$18M",
        reward: "Token + NFT",
        type: "DeFi",
        social: {
            twitter: "https://twitter.com/taker",
            telegram: "https://t.me/taker",
            website: "https://taker.fi",
            discord: "https://discord.gg/taker"
        },
        joinLink: "https://taker.fi/join"
    },
    {
        id: "bless",
        name: "Bless",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        description: "Community-driven platform for NFT creation and trading",
        tags: ["nft", "marketplace"],
        tge: "Q1 2023",
        funding: "$12M",
        reward: "Token Airdrop",
        type: "NFT",
        social: {
            twitter: "https://twitter.com/bless",
            telegram: "https://t.me/bless",
            website: "https://bless.app",
            discord: "https://discord.gg/bless"
        },
        joinLink: "https://bless.app/join"
    },
    {
        id: "cess",
        name: "Cess",
        logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
        description: "Decentralized cloud storage network with encryption",
        tags: ["testnet", "storage"],
        tge: "Q4 2023",
        funding: "$30M",
        reward: "Token Airdrop",
        type: "Storage",
        social: {
            twitter: "https://twitter.com/cess",
            telegram: "https://t.me/cess",
            website: "https://cess.network",
            discord: "https://discord.gg/cess"
        },
        joinLink: "https://cess.network/join"
    },
    {
        id: "beamable",
        name: "Beamable",
        logo: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
        description: "Gaming infrastructure for web3 games and virtual worlds",
        tags: ["gaming", "infrastructure"],
        tge: "Q2 2023",
        funding: "$15M",
        reward: "Token + Game Assets",
        type: "Gaming",
        social: {
            twitter: "https://twitter.com/beamable",
            telegram: "https://t.me/beamable",
            website: "https://beamable.com",
            discord: "https://discord.gg/beamable"
        },
        joinLink: "https://beamable.com/join"
    },
    {
        id: "pod",
        name: "P.o.d",
        logo: "https://cryptologos.cc/logos/polygon-matic-logo.png",
        description: "Proof of Dedication protocol for fair token distribution",
        tags: ["testnet", "faucet"],
        tge: "Q3 2023",
        funding: "$8M",
        reward: "Token Airdrop",
        type: "Infrastructure",
        social: {
            twitter: "https://twitter.com/pod",
            telegram: "https://t.me/pod",
            website: "https://pod.network",
            discord: "https://discord.gg/pod"
        },
        joinLink: "https://pod.network/join"
    },
    {
        id: "ofc",
        name: "OFC",
        logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
        description: "Open Finance Collective for decentralized lending",
        tags: ["defi", "lending"],
        tge: "Q1 2023",
        funding: "$20M",
        reward: "Token Airdrop",
        type: "DeFi",
        social: {
            twitter: "https://twitter.com/ofc",
            telegram: "https://t.me/ofc",
            website: "https://ofc.finance",
            discord: "https://discord.gg/ofc"
        },
        joinLink: "https://ofc.finance/join"
    },
    {
        id: "newton",
        name: "Newton",
        logo: "https://cryptologos.cc/logos/cardano-ada-logo.png",
        description: "AI-powered trading protocol with prediction markets",
        tags: ["testnet", "ai"],
        tge: "Q4 2023",
        funding: "$22M",
        reward: "Token Airdrop",
        type: "Trading",
        social: {
            twitter: "https://twitter.com/newton",
            telegram: "https://t.me/newton",
            website: "https://newton.finance",
            discord: "https://discord.gg/newton"
        },
        joinLink: "https://newton.finance/join"
    },
    {
        id: "billions",
        name: "Billions",
        logo: "https://cryptologos.cc/logos/chainlink-link-logo.png",
        description: "Decentralized synthetic assets platform for global markets",
        tags: ["defi", "synthetic"],
        tge: "Q2 2023",
        funding: "$35M",
        reward: "Token Airdrop",
        type: "DeFi",
        social: {
            twitter: "https://twitter.com/billions",
            telegram: "https://t.me/billions",
            website: "https://billions.finance",
            discord: "https://discord.gg/billions"
        },
        joinLink: "https://billions.finance/join"
    },
    {
        id: "monadscore",
        name: "Monad Score",
        logo: "https://cryptologos.cc/logos/uniswap-uni-logo.png",
        description: "Reputation scoring system for web3 identities",
        tags: ["identity", "testnet"],
        tge: "Q3 2023",
        funding: "$12M",
        reward: "Token Airdrop",
        type: "Identity",
        social: {
            twitter: "https://twitter.com/monadscore",
            telegram: "https://t.me/monadscore",
            website: "https://monadscore.io",
            discord: "https://discord.gg/monadscore"
        },
        joinLink: "https://monadscore.io/join"
    },
    {
        id: "malda",
        name: "Malda",
        logo: "https://cryptologos.cc/logos/optimism-ethereum-op-logo.png",
        description: "Cross-chain messaging protocol for DeFi applications",
        tags: ["soon", "infrastructure"],
        tge: "Q4 2023",
        funding: "$15M",
        reward: "Token Airdrop",
        type: "Infrastructure",
        social: {
            twitter: "https://twitter.com/malda",
            telegram: "https://t.me/malda",
            website: "https://malda.network",
            discord: "https://discord.gg/malda"
        },
        joinLink: "https://malda.network/join"
    },
    {
        id: "recall",
        name: "Recall",
        logo: "https://cryptologos.cc/logos/near-protocol-near-logo.png",
        description: "Decentralized data storage with AI indexing capabilities",
        tags: ["ai", "storage"],
        tge: "Q2 2023",
        funding: "$18M",
        reward: "Token + Storage Credits",
        type: "Storage",
        social: {
            twitter: "https://twitter.com/recall",
            telegram: "https://t.me/recall",
            website: "https://recall.storage",
            discord: "https://discord.gg/recall"
        },
        joinLink: "https://recall.storage/join"
    },
    {
        id: "arichan",
        name: "Ari Chan Wallet",
        logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
        description: "Smart wallet with cross-chain capabilities (Refer: 67ea953c38d2f)",
        tags: ["wallet", "testnet"],
        tge: "Q3 2023",
        funding: "$10M",
        reward: "Token Airdrop",
        type: "Wallet",
        social: {
            twitter: "https://twitter.com/arichan",
            telegram: "https://t.me/arichan",
            website: "https://arichan.wallet",
            discord: "https://discord.gg/arichan"
        },
        joinLink: "https://arichan.wallet/join"
    },
    {
        id: "exabits",
        name: "Exabits",
        logo: "https://cryptologos.cc/logos/filecoin-fil-logo.png",
        description: "Decentralized compute network with zelay and galxe integration",
        tags: ["compute", "testnet"],
        tge: "Q4 2023",
        funding: "$25M",
        reward: "Token Airdrop",
        type: "Compute",
        social: {
            twitter: "https://twitter.com/exabits",
            telegram: "https://t.me/exabits",
            website: "https://exabits.network",
            discord: "https://discord.gg/exabits"
        },
        joinLink: "https://exabits.network/join"
    },
    {
        id: "grass",
        name: "Grass",
        logo: "https://cryptologos.cc/logos/algorand-algo-logo.png",
        description: "Climate-positive blockchain with carbon offset features",
        tags: ["climate", "testnet"],
        tge: "Q2 2023",
        funding: "$14M",
        reward: "Token + Carbon Credits",
        type: "Climate",
        social: {
            twitter: "https://twitter.com/grass",
            telegram: "https://t.me/grass",
            website: "https://grass.earth",
            discord: "https://discord.gg/grass"
        },
        joinLink: "https://grass.earth/join"
    },
    {
        id: "coresky",
        name: "Coresky",
        logo: "https://cryptologos.cc/logos/aptos-apt-logo.png",
        description: "Modular layer for scalable blockchain applications",
        tags: ["layer2", "testnet"],
        tge: "Q3 2023",
        funding: "$30M",
        reward: "Token Airdrop",
        type: "Infrastructure",
        social: {
            twitter: "https://twitter.com/coresky",
            telegram: "https://t.me/coresky",
            website: "https://coresky.network",
            discord: "https://discord.gg/coresky"
        },
        joinLink: "https://coresky.network/join"
    },
    {
        id: "interlink",
        name: "Interlink",
        logo: "https://cryptologos.cc/logos/the-graph-grt-logo.png",
        description: "Cross-chain communication protocol for interoperability",
        tags: ["infra", "testnet"],
        tge: "Q1 2023",
        funding: "$22M",
        reward: "Token Airdrop",
        type: "Infrastructure",
        social: {
            twitter: "https://twitter.com/interlink",
            telegram: "https://t.me/interlink",
            website: "https://interlink.protocol",
            discord: "https://discord.gg/interlink"
        },
        joinLink: "https://interlink.protocol/join"
    },
    {
        id: "ethblockscout",
        name: "Eth Block Scout",
        logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
        description: "Enhanced block explorer with analytics for Ethereum",
        tags: ["explorer", "testnet"],
        tge: "Q4 2023",
        funding: "$8M",
        reward: "Token Airdrop",
        type: "Explorer",
        social: {
            twitter: "https://twitter.com/ethblockscout",
            telegram: "https://t.me/ethblockscout",
            website: "https://ethblockscout.io",
            discord: "https://discord.gg/ethblockscout"
        },
        joinLink: "https://ethblockscout.io/join"
    },
    {
        id: "haust",
        name: "Haust",
        logo: "https://cryptologos.cc/logos/tezos-xtz-logo.png",
        description: "Decentralized data oracle for real-world information",
        tags: ["oracle", "testnet"],
        tge: "Q2 2023",
        funding: "$16M",
        reward: "Token Airdrop",
        type: "Oracle",
        social: {
            twitter: "https://twitter.com/haust",
            telegram: "https://t.me/haust",
            website: "https://haust.oracle",
            discord: "https://discord.gg/haust"
        },
        joinLink: "https://haust.oracle/join"
    },
    {
        id: "3dos",
        name: "3DOS",
        logo: "https://cryptologos.cc/logos/arweave-ar-logo.png",
        description: "Decentralized operating system for web3 applications",
        tags: ["os", "testnet"],
        tge: "Q3 2023",
        funding: "$20M",
        reward: "Token Airdrop",
        type: "OS",
        social: {
            twitter: "https://twitter.com/3dos",
            telegram: "https://t.me/3dos",
            website: "https://3dos.network",
            discord: "https://discord.gg/3dos"
        },
        joinLink: "https://3dos.network/join"
    },
    {
        id: "dvin",
        name: "Dvin",
        logo: "https://cryptologos.cc/logos/sui-sui-logo.png",
        description: "Zero-knowledge proof platform for privacy applications",
        tags: ["zk", "privacy"],
        tge: "Q4 2023",
        funding: "$28M",
        reward: "Token Airdrop",
        type: "Privacy",
        social: {
            twitter: "https://twitter.com/dvin",
            telegram: "https://t.me/dvin",
            website: "https://dvin.zk",
            discord: "https://discord.gg/dvin"
        },
        joinLink: "https://dvin.zk/join"
    }
];

// Data storage keys
const STORAGE_KEYS = {
    PROJECTS: 'dropdeck_projects',
    JOINED_PROJECTS: 'dropdeck_joined_projects',
    MY_TASKS: 'dropdeck_my_tasks',
    INVESTMENTS: 'dropdeck_investments',
    EARNINGS: 'dropdeck_earnings',
    FAVORITES: 'dropdeck_favorites',
    LAST_RESET: 'dropdeck_last_reset'
};

// Get data from local storage with fallback
function getStoredData(key, fallback = []) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
}

// Save data to local storage
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Initialize projects
function initProjects() {
    // Check if projects are already stored
    let projects = getStoredData(STORAGE_KEYS.PROJECTS);
    
    // If no projects are stored, initialize with default projects
    if (projects.length === 0) {
        saveData(STORAGE_KEYS.PROJECTS, defaultProjects);
    }
}

// Check and reset tasks at midnight
function initTaskResetCheck() {
    const lastReset = localStorage.getItem(STORAGE_KEYS.LAST_RESET);
    const today = new Date().toDateString();
    
    if (lastReset !== today) {
        // Reset tasks
        const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
        
        tasks.forEach(project => {
            project.tasks.forEach(task => {
                task.completed = false;
            });
        });
        
        saveData(STORAGE_KEYS.MY_TASKS, tasks);
        localStorage.setItem(STORAGE_KEYS.LAST_RESET, today);
    }
    
    // Set up next check at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        initTaskResetCheck();
        renderTasksTab();
        updateTaskStats();
    }, timeUntilMidnight);
}

// ===== UI HANDLERS =====

// Initialize app
function initApp() {
    // Initialize data
    initProjects();
    initTaskResetCheck();
    
    // Set up navigation
    setupNavigation();
    
    // Set up dashboard tabs
    setupDashboardTabs();
    
    // Set up project details
    setupProjectDetails();
    
    // Set up modals
    setupModals();
    
    // Set up investment and earning forms
    setupInvestmentForm();
    setupEarningForm();
    
    // Set up tasks
    setupTaskActions();
    
    // Render UI
    renderDashboard();
    renderInvestmentTab();
    renderExploreTab();
    renderTasksTab();
    
    // Update project stats
    updateProjectStats();
    updateTaskStats();
}

// Set up bottom navigation
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get tab ID from data attribute
            const tabId = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and tabs
            navButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            
            // Add active class to clicked button and corresponding tab
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Set up dashboard tabs
function setupDashboardTabs() {
    const dashboardTabs = document.querySelectorAll('.dashboard-tab');
    
    dashboardTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Get tab ID from data attribute
            const tabId = tab.getAttribute('data-tab');
            
            // Remove active class from all tabs and panels
            dashboardTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.dashboard-panel').forEach(panel => panel.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding panel
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Set up modals
function setupModals() {
    // Close buttons
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            document.getElementById(modalId).classList.remove('active');
        });
    });
    
    // Open investment modal
    document.getElementById('add-investment-btn').addEventListener('click', () => {
        document.getElementById('investment-modal').classList.add('active');
    });
    
    // Open earning modal
    document.getElementById('add-earning-btn').addEventListener('click', () => {
        document.getElementById('earning-modal').classList.add('active');
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    
    // Back button in project details
    document.getElementById('back-to-explore').addEventListener('click', () => {
        document.getElementById('project-details-modal').classList.remove('active');
    });
    
    // Delete confirmation modal
    document.getElementById('cancel-delete').addEventListener('click', () => {
        document.getElementById('delete-confirmation-modal').classList.remove('active');
    });
}

// Set up project details modal
function setupProjectDetails() {
    // Add event listeners for project action buttons
    document.getElementById('favorite-project-btn').addEventListener('click', favoriteProject);
    document.getElementById('add-to-my-projects-btn').addEventListener('click', addToMyProjects);
    document.getElementById('join-project-btn').addEventListener('click', openJoinLink);
}

// Set up investment form
function setupInvestmentForm() {
    const form = document.getElementById('investment-form');
    const projectSelect = document.getElementById('investment-project');
    
    // Populate project dropdown
    updateProjectDropdowns();
    
    // Handle custom project selection
    projectSelect.addEventListener('change', function() {
        const customFields = document.querySelectorAll('#investment-modal .custom-project-fields');
        if (this.value === 'custom') {
            customFields.forEach(field => field.style.display = 'block');
        } else {
            customFields.forEach(field => field.style.display = 'none');
        }
    });
    
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('investment-date').value = today;
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectId = projectSelect.value;
        let projectName, projectImage;
        
        if (projectId === 'custom') {
            projectName = document.getElementById('custom-project-name').value;
            projectImage = document.getElementById('custom-project-image').value || 'https://cryptologos.cc/logos/ethereum-eth-logo.png';
        } else {
            const projects = getStoredData(STORAGE_KEYS.PROJECTS);
            const project = projects.find(p => p.id === projectId);
            projectName = project.name;
            projectImage = project.logo;
        }
        
        const amount = parseFloat(document.getElementById('investment-amount').value);
        const date = document.getElementById('investment-date').value;
        const notes = document.getElementById('investment-notes').value;
        
        // Create investment object
        const investment = {
            id: Date.now().toString(),
            projectId,
            projectName,
            projectImage,
            amount,
            date,
            notes,
            timestamp: new Date().toISOString()
        };
        
        // Add to investments
        const investments = getStoredData(STORAGE_KEYS.INVESTMENTS);
        investments.push(investment);
        saveData(STORAGE_KEYS.INVESTMENTS, investments);
        
        // Update UI
        renderInvestmentTab();
        updateProjectStats();
        
        // Reset form and close modal
        form.reset();
        document.getElementById('investment-date').value = today;
        document.querySelectorAll('#investment-modal .custom-project-fields').forEach(field => field.style.display = 'none');
        document.getElementById('investment-modal').classList.remove('active');
    });
}

// Set up earning form
function setupEarningForm() {
    const form = document.getElementById('earning-form');
    const projectSelect = document.getElementById('earning-project');
    
    // Populate project dropdown
    updateProjectDropdowns();
    
    // Handle custom project selection
    projectSelect.addEventListener('change', function() {
        const customFields = document.querySelectorAll('#earning-modal .custom-project-fields');
        if (this.value === 'custom') {
            customFields.forEach(field => field.style.display = 'block');
        } else {
            customFields.forEach(field => field.style.display = 'none');
        }
    });
    
    // Set default date to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('earning-date').value = today;
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectId = projectSelect.value;
        let projectName, projectImage;
        
        if (projectId === 'custom') {
            projectName = document.getElementById('custom-earning-project-name').value;
            projectImage = document.getElementById('custom-earning-project-image').value || 'https://cryptologos.cc/logos/ethereum-eth-logo.png';
        } else {
            const projects = getStoredData(STORAGE_KEYS.PROJECTS);
            const project = projects.find(p => p.id === projectId);
            projectName = project.name;
            projectImage = project.logo;
        }
        
        const amount = parseFloat(document.getElementById('earning-amount').value);
        const date = document.getElementById('earning-date').value;
        const notes = document.getElementById('earning-notes').value;
        
        // Create earning object
        const earning = {
            id: Date.now().toString(),
            projectId,
            projectName,
            projectImage,
            amount,
            date,
            notes,
            timestamp: new Date().toISOString()
        };
        
        // Add to earnings
        const earnings = getStoredData(STORAGE_KEYS.EARNINGS);
        earnings.push(earning);
        saveData(STORAGE_KEYS.EARNINGS, earnings);
        
        // Update UI
        renderInvestmentTab();
        updateProjectStats();
        
        // Reset form and close modal
        form.reset();
        document.getElementById('earning-date').value = today;
        document.querySelectorAll('#earning-modal .custom-project-fields').forEach(field => field.style.display = 'none');
        document.getElementById('earning-modal').classList.remove('active');
    });
}

// Update project dropdowns for investment and earning forms
function updateProjectDropdowns() {
    const investmentProject = document.getElementById('investment-project');
    const earningProject = document.getElementById('earning-project');
    
    // Clear existing options except the default and custom
    investmentProject.innerHTML = '<option value="">Select a project</option><option value="custom">Custom...</option>';
    earningProject.innerHTML = '<option value="">Select a project</option><option value="custom">Custom...</option>';
    
    // Get projects
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    
    // Add joined projects first
    joinedProjects.forEach(projectId => {
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            const investOption = document.createElement('option');
            investOption.value = project.id;
            investOption.textContent = project.name;
            investmentProject.appendChild(investOption);
            
            const earnOption = document.createElement('option');
            earnOption.value = project.id;
            earnOption.textContent = project.name;
            earningProject.appendChild(earnOption);
        }
    });
    
    // Add other projects
    projects.forEach(project => {
        if (!joinedProjects.includes(project.id)) {
            const investOption = document.createElement('option');
            investOption.value = project.id;
            investOption.textContent = project.name;
            investmentProject.appendChild(investOption);
            
            const earnOption = document.createElement('option');
            earnOption.value = project.id;
            earnOption.textContent = project.name;
            earningProject.appendChild(earnOption);
        }
    });
}

// Setup task actions
function setupTaskActions() {
    // Add task form
    document.getElementById('add-task-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const projectId = document.getElementById('task-project-id').value;
        const taskName = document.getElementById('task-name').value;
        const taskDescription = document.getElementById('task-description').value;
        
        // Create task object
        const task = {
            id: Date.now().toString(),
            name: taskName,
            description: taskDescription,
            completed: false,
            createdAt: new Date().toISOString()
        };
        
        // Add to tasks
        const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
        
        // Check if project already has tasks
        const projectTaskIndex = tasks.findIndex(t => t.projectId === projectId);
        
        if (projectTaskIndex === -1) {
            // Project doesn't have tasks yet
            const projects = getStoredData(STORAGE_KEYS.PROJECTS);
            const project = projects.find(p => p.id === projectId);
            
            tasks.push({
                projectId,
                projectName: project.name,
                projectLogo: project.logo,
                tasks: [task]
            });
        } else {
            // Project already has tasks
            tasks[projectTaskIndex].tasks.push(task);
        }
        
        // Save tasks
        saveData(STORAGE_KEYS.MY_TASKS, tasks);
        
        // Update UI
        renderTasksTab();
        updateTaskStats();
        
        // Reset form and close modal
        this.reset();
        document.getElementById('add-task-modal').classList.remove('active');
    });
    
    // Task list event delegation
    document.getElementById('tasks-list').addEventListener('click', function(e) {
        // Check for task checkbox
        if (e.target.classList.contains('task-checkbox')) {
            const projectId = e.target.getAttribute('data-project-id');
            const taskId = e.target.getAttribute('data-task-id');
            toggleTaskCompletion(projectId, taskId);
        }
        
        // Check for task delete
        if (e.target.classList.contains('task-delete')) {
            const projectId = e.target.getAttribute('data-project-id');
            const taskId = e.target.getAttribute('data-task-id');
            
            // Configure delete confirmation
            document.getElementById('delete-confirmation-message').textContent = 'Are you sure you want to delete this task?';
            document.getElementById('confirm-delete').setAttribute('data-delete-type', 'task');
            document.getElementById('confirm-delete').setAttribute('data-project-id', projectId);
            document.getElementById('confirm-delete').setAttribute('data-task-id', taskId);
            
            // Show confirmation modal
            document.getElementById('delete-confirmation-modal').classList.add('active');
        }
    });
    
    // Transaction list event delegation
    document.getElementById('transaction-list').addEventListener('click', function(e) {
        // Check for transaction delete
        if (e.target.classList.contains('transaction-delete')) {
            const transactionId = e.target.getAttribute('data-transaction-id');
            const transactionType = e.target.getAttribute('data-transaction-type');
            
            // Configure delete confirmation
            document.getElementById('delete-confirmation-message').textContent = 'Are you sure you want to delete this transaction?';
            document.getElementById('confirm-delete').setAttribute('data-delete-type', 'transaction');
            document.getElementById('confirm-delete').setAttribute('data-transaction-id', transactionId);
            document.getElementById('confirm-delete').setAttribute('data-transaction-type', transactionType);
            
            // Show confirmation modal
            document.getElementById('delete-confirmation-modal').classList.add('active');
        }
    });
    
    // Confirm delete button
    document.getElementById('confirm-delete').addEventListener('click', function() {
        const deleteType = this.getAttribute('data-delete-type');
        
        if (deleteType === 'task') {
            const projectId = this.getAttribute('data-project-id');
            const taskId = this.getAttribute('data-task-id');
            deleteTask(projectId, taskId);
        } else if (deleteType === 'transaction') {
            const transactionId = this.getAttribute('data-transaction-id');
            const transactionType = this.getAttribute('data-transaction-type');
            deleteTransaction(transactionId, transactionType);
        }
        
        // Close confirmation modal
        document.getElementById('delete-confirmation-modal').classList.remove('active');
    });
}

// ===== RENDERING FUNCTIONS =====

// Render dashboard tab
function renderDashboard() {
    // Update dashboard stats
    updateDashboardStats();
    
    // Render My Projects
    renderMyProjects();
    
    // Render Hot Projects
    renderHotProjects();
    
    // Render All Projects
    renderAllProjects();
}

// Update dashboard stats
function updateDashboardStats() {
    const investments = getStoredData(STORAGE_KEYS.INVESTMENTS);
    const earnings = getStoredData(STORAGE_KEYS.EARNINGS);
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
    
    // Calculate total investment
    const totalInvestment = investments.reduce((total, inv) => total + inv.amount, 0);
    document.querySelector('.total-investment').textContent = `$${totalInvestment.toFixed(2)}`;
    
    // Calculate total earnings
    const totalEarnings = earnings.reduce((total, earn) => total + earn.amount, 0);
    document.querySelector('.total-earnings').textContent = `$${totalEarnings.toFixed(2)}`;
    
    // Update project stats
    document.querySelector('.joined-projects').textContent = joinedProjects.length;
    document.querySelector('.total-projects').textContent = projects.length;
    
    // Calculate task stats
    let completedTasks = 0;
    let totalTasks = 0;
    
    tasks.forEach(project => {
        project.tasks.forEach(task => {
            totalTasks++;
            if (task.completed) {
                completedTasks++;
            }
        });
    });
    
    document.querySelector('.completed-tasks').textContent = completedTasks;
    document.querySelector('.total-tasks').textContent = totalTasks;
}

// Render My Projects
function renderMyProjects() {
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const myProjectsGrid = document.getElementById('my-projects-grid');
    const emptyState = document.getElementById('empty-my-projects');
    
    // Clear grid
    myProjectsGrid.innerHTML = '';
    
    if (joinedProjects.length === 0) {
        // Show empty state
        emptyState.style.display = 'block';
        return;
    }
    
    // Hide empty state
    emptyState.style.display = 'none';
    
    // Render joined projects
    joinedProjects.forEach(projectId => {
        const project = projects.find(p => p.id === projectId);
        
        if (project) {
            renderProjectCard(myProjectsGrid, project, true);
        }
    });
}

// Render project card
function renderProjectCard(container, project, isJoined = false) {
    // Create card
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    // Add joined badge if joined
    if (isJoined) {
        const badge = document.createElement('div');
        badge.className = 'joined-badge';
        badge.textContent = 'Joined';
        card.appendChild(badge);
    }
    
    // Add card content
    card.innerHTML += `
        <div class="project-card-banner"></div>
        <img src="${project.logo}" alt="${project.name}" class="project-card-logo">
        <div class="project-card-content">
            <h3 class="project-card-name">${project.name}</h3>
            <p class="project-card-stats">${project.type} | ${project.tge}</p>
            <div class="project-card-tag">${project.tags[0]}</div>
        </div>
    `;
    
    // Add click event to open project details
    card.addEventListener('click', () => {
        openProjectDetails(project);
    });
    
    // Add card to container
    container.appendChild(card);
}

// Render Hot Projects
function renderHotProjects() {
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const hotProjectsGrid = document.getElementById('hot-projects-grid');
    
    // Clear grid
    hotProjectsGrid.innerHTML = '';
    
    // Get projects with "soon" or "testnet" tags
    const hotProjects = projects.filter(project => {
        return project.tags.includes('soon') || project.tags.includes('testnet');
    });
    
    // Render hot projects
    hotProjects.forEach(project => {
        renderProjectCard(hotProjectsGrid, project, joinedProjects.includes(project.id));
    });
}

// Render All Projects
function renderAllProjects() {
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const allProjectsGrid = document.getElementById('all-projects-grid');
    
    // Clear grid
    allProjectsGrid.innerHTML = '';
    
    // Render all projects
    projects.forEach(project => {
        renderProjectCard(allProjectsGrid, project, joinedProjects.includes(project.id));
    });
}

// Render Investment Tab
function renderInvestmentTab() {
    const investments = getStoredData(STORAGE_KEYS.INVESTMENTS);
    const earnings = getStoredData(STORAGE_KEYS.EARNINGS);
    const transactionList = document.getElementById('transaction-list');
    const emptyHistory = document.getElementById('empty-history');
    
    // Calculate investment stats
    const totalInvestment = investments.reduce((total, inv) => total + inv.amount, 0);
    const totalEarnings = earnings.reduce((total, earn) => total + earn.amount, 0);
    
    // Set ROI
    let roi = 0;
    if (totalInvestment > 0) {
        roi = (totalEarnings - totalInvestment) / totalInvestment * 100;
    }
    document.querySelector('.roi-value').textContent = `${roi.toFixed(2)}%`;
    
    // Set monthly value
    // For demo purposes, we'll just divide total earnings by 12
    const monthlyValue = totalEarnings / 12;
    document.querySelector('.monthly-value').textContent = `$${monthlyValue.toFixed(2)}`;
    
    // Set totals
    document.querySelector('.invest-total-value').textContent = `$${totalInvestment.toFixed(2)}`;
    document.querySelector('.earn-total-value').textContent = `$${totalEarnings.toFixed(2)}`;
    
    // Clear transaction list
    transactionList.innerHTML = '';
    
    // Combine and sort transactions
    const transactions = [
        ...investments.map(inv => ({
            ...inv,
            type: 'investment'
        })),
        ...earnings.map(earn => ({
            ...earn,
            type: 'earning'
        }))
    ];
    
    // Sort by date, newest first
    transactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    if (transactions.length === 0) {
        // Show empty state
        emptyHistory.style.display = 'block';
        return;
    }
    
    // Hide empty state
    emptyHistory.style.display = 'none';
    
    // Render transactions
    transactions.forEach(transaction => {
        // Format date
        const date = new Date(transaction.date);
        const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        
        // Create transaction item
        const item = document.createElement('div');
        item.className = `transaction-item ${transaction.type}`;
        
        item.innerHTML = `
            <img src="${transaction.projectImage}" alt="${transaction.projectName}" class="transaction-logo">
            <div class="transaction-details">
                <h4 class="transaction-title">${transaction.projectName}</h4>
                <p class="transaction-date">${formattedDate}</p>
                ${transaction.notes ? `<p class="transaction-notes">${transaction.notes}</p>` : ''}
            </div>
            <div class="transaction-amount">$${transaction.amount.toFixed(2)}</div>
            <button class="transaction-delete" data-transaction-id="${transaction.id}" data-transaction-type="${transaction.type}"></button>
        `;
        
        transactionList.appendChild(item);
    });
}

// Render Explore Tab
function renderExploreTab() {
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const exploreGrid = document.getElementById('explore-grid');
    
    // Clear grid
    exploreGrid.innerHTML = '';
    
    // Render projects
    projects.forEach(project => {
        // Create explore item
        const item = document.createElement('div');
        item.className = 'explore-item';
        
        // Add badge if joined
        if (joinedProjects.includes(project.id)) {
            const badge = document.createElement('div');
            badge.className = 'joined-badge';
            badge.textContent = 'Joined';
            item.appendChild(badge);
        }
        
        // Check if project has "soon" tag
        if (project.tags.includes('soon')) {
            const badge = document.createElement('div');
            badge.className = 'soon-badge';
            badge.textContent = 'Soon';
            item.appendChild(badge);
        }
        
        // Add content
        item.innerHTML += `
            <img src="${project.logo}" alt="${project.name}" class="explore-logo">
            <div class="explore-details">
                <h3 class="explore-name">${project.name}</h3>
                <p class="explore-description">${project.description}</p>
                <div class="explore-tags">
                    ${project.tags.map(tag => `<span class="explore-tag">${tag}</span>`).join('')}
                </div>
                <div class="explore-social">
                    ${Object.entries(project.social).map(([platform, url]) => 
                        `<a href="${url}" target="_blank" class="social-link">
                            <div class="social-icon ${platform}-icon"></div>
                        </a>`
                    ).join('')}
                </div>
            </div>
        `;
        
        // Add click event
        item.addEventListener('click', () => {
            openProjectDetails(project);
        });
        
        exploreGrid.appendChild(item);
    });
}

// Open project details
function openProjectDetails(project) {
    const modal = document.getElementById('project-details-modal');
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const favorites = getStoredData(STORAGE_KEYS.FAVORITES);
    
    // Set project details
    document.getElementById('project-detail-name').textContent = project.name;
    document.getElementById('project-detail-logo').src = project.logo;
    document.getElementById('project-detail-tge').textContent = project.tge;
    document.getElementById('project-detail-funding').textContent = project.funding;
    document.getElementById('project-detail-reward').textContent = project.reward;
    document.getElementById('project-detail-type').textContent = project.type;
    document.getElementById('project-detail-description').textContent = project.description;
    
    // Clear and set tags
    const tagsContainer = document.getElementById('project-detail-tags');
    tagsContainer.innerHTML = '';
    
    project.tags.forEach(tag => {
        const tagEl = document.createElement('div');
        tagEl.className = 'project-tag';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });
    
    // Clear and set social links
    const socialContainer = document.getElementById('project-detail-social');
    socialContainer.innerHTML = '';
    
    Object.entries(project.social).forEach(([platform, url]) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.className = 'project-social-link';
        
        const icon = document.createElement('div');
        icon.className = `social-icon ${platform}-icon`;
        
        link.appendChild(icon);
        socialContainer.appendChild(link);
    });
    
    // Update buttons
    const favoriteButton = document.getElementById('favorite-project-btn');
    const addToMyProjectsButton = document.getElementById('add-to-my-projects-btn');
    const joinProjectButton = document.getElementById('join-project-btn');
    
    // Set project ID attributes
    favoriteButton.setAttribute('data-project-id', project.id);
    addToMyProjectsButton.setAttribute('data-project-id', project.id);
    joinProjectButton.setAttribute('data-project-id', project.id);
    joinProjectButton.setAttribute('data-join-link', project.joinLink);
    
    // Update button text based on state
    if (favorites.includes(project.id)) {
        favoriteButton.innerHTML = `
            <span class="action-icon favorite-icon"></span>
            <span>Remove from Favorites</span>
        `;
    } else {
        favoriteButton.innerHTML = `
            <span class="action-icon favorite-icon"></span>
            <span>Add to Favorites</span>
        `;
    }
    
    if (joinedProjects.includes(project.id)) {
        addToMyProjectsButton.innerHTML = `
            <span class="action-icon add-icon"></span>
            <span>Remove from My Projects</span>
        `;
    } else {
        addToMyProjectsButton.innerHTML = `
            <span class="action-icon add-icon"></span>
            <span>Add to My Projects</span>
        `;
    }
    
    // Show modal
    modal.classList.add('active');
}

// Add/remove project from favorites
function favoriteProject() {
    const projectId = this.getAttribute('data-project-id');
    const favorites = getStoredData(STORAGE_KEYS.FAVORITES);
    
    // Check if project is already in favorites
    const index = favorites.indexOf(projectId);
    
    if (index !== -1) {
        // Remove from favorites
        favorites.splice(index, 1);
        this.innerHTML = `
            <span class="action-icon favorite-icon"></span>
            <span>Add to Favorites</span>
        `;
    } else {
        // Add to favorites
        favorites.push(projectId);
        this.innerHTML = `
            <span class="action-icon favorite-icon"></span>
            <span>Remove from Favorites</span>
        `;
    }
    
    // Save to local storage
    saveData(STORAGE_KEYS.FAVORITES, favorites);
}

// Add/remove project from my projects
function addToMyProjects() {
    const projectId = this.getAttribute('data-project-id');
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    
    // Check if project is already in my projects
    const index = joinedProjects.indexOf(projectId);
    
    if (index !== -1) {
        // Remove from my projects
        joinedProjects.splice(index, 1);
        this.innerHTML = `
            <span class="action-icon add-icon"></span>
            <span>Add to My Projects</span>
        `;
    } else {
        // Add to my projects
        joinedProjects.push(projectId);
        this.innerHTML = `
            <span class="action-icon add-icon"></span>
            <span>Remove from My Projects</span>
        `;
    }
    
    // Save to local storage
    saveData(STORAGE_KEYS.JOINED_PROJECTS, joinedProjects);
    
    // Update UI
    renderDashboard();
    updateProjectStats();
}

// Open join link
function openJoinLink() {
    const joinLink = this.getAttribute('data-join-link');
    window.open(joinLink, '_blank');
}

// Render Tasks Tab
function renderTasksTab() {
    const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    const tasksList = document.getElementById('tasks-list');
    const emptyTasks = document.getElementById('empty-tasks');
    
    // Clear tasks list
    tasksList.innerHTML = '';
    
    // Check if there are any joined projects
    if (joinedProjects.length === 0) {
        // Show empty state
        emptyTasks.style.display = 'block';
        return;
    }
    
    // Hide empty state
    emptyTasks.style.display = 'none';
    
    // Render tasks for each joined project
    joinedProjects.forEach(projectId => {
        const project = projects.find(p => p.id === projectId);
        
        if (!project) return;
        
        // Create project container
        const projectContainer = document.createElement('div');
        projectContainer.className = 'task-project';
        
        // Create project header
        const projectHeader = document.createElement('div');
        projectHeader.className = 'task-project-header';
        
        // Project logo
        const projectLogo = document.createElement('img');
        projectLogo.className = 'task-project-logo';
        projectLogo.src = project.logo;
        projectLogo.alt = project.name;
        
        // Project info
        const projectInfo = document.createElement('div');
        projectInfo.className = 'task-project-info';
        
        // Project tasks
        const projectTasks = tasks.find(t => t.projectId === projectId);
        let taskCount = 0;
        let completedCount = 0;
        
        if (projectTasks) {
            taskCount = projectTasks.tasks.length;
            completedCount = projectTasks.tasks.filter(t => t.completed).length;
        }
        
        // Add project name and task count
        projectInfo.innerHTML = `
            <h3 class="task-project-name">${project.name}</h3>
            <p class="task-count">${completedCount}/${taskCount} tasks completed</p>
        `;
        
        // Add task button
        const addTaskButton = document.createElement('button');
        addTaskButton.className = 'add-task-button';
        addTaskButton.textContent = 'Add Task';
        addTaskButton.addEventListener('click', (e) => {
            e.stopPropagation();
            openAddTaskModal(project);
        });
        
        // Assemble project header
        projectHeader.appendChild(projectLogo);
        projectHeader.appendChild(projectInfo);
        projectHeader.appendChild(addTaskButton);
        projectContainer.appendChild(projectHeader);
        
        // Check if project has any tasks
        if (projectTasks && projectTasks.tasks.length > 0) {
            // Create task list
            const taskList = document.createElement('div');
            taskList.className = 'task-list';
            
            // Render tasks
            projectTasks.tasks.forEach(task => {
                // Create task item
                const taskItem = document.createElement('div');
                taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
                
                // Task checkbox
                const taskCheckbox = document.createElement('div');
                taskCheckbox.className = `task-checkbox ${task.completed ? 'checked' : ''}`;
                taskCheckbox.setAttribute('data-project-id', projectId);
                taskCheckbox.setAttribute('data-task-id', task.id);
                
                // Task content
                const taskContent = document.createElement('div');
                taskContent.className = 'task-content';
                taskContent.innerHTML = `
                    <h4 class="task-name">${task.name}</h4>
                    ${task.description ? `<p class="task-description">${task.description}</p>` : ''}
                `;
                
                // Task actions
                const taskActions = document.createElement('div');
                taskActions.className = 'task-actions';
                
                // Delete button
                const deleteButton = document.createElement('div');
                deleteButton.className = 'task-delete';
                deleteButton.setAttribute('data-project-id', projectId);
                deleteButton.setAttribute('data-task-id', task.id);
                
                taskActions.appendChild(deleteButton);
                
                // Assemble task item
                taskItem.appendChild(taskCheckbox);
                taskItem.appendChild(taskContent);
                taskItem.appendChild(taskActions);
                
                taskList.appendChild(taskItem);
            });
            
            // Add task list to project container
            projectContainer.appendChild(taskList);
            
            // Add progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'project-progress';
            
            const progressFill = document.createElement('div');
            progressFill.className = 'project-progress-fill';
            
            // Calculate progress percentage
            const progressPercentage = taskCount > 0 ? (completedCount / taskCount) * 100 : 0;
            progressFill.style.width = `${progressPercentage}%`;
            
            progressBar.appendChild(progressFill);
            projectContainer.appendChild(progressBar);
            
            // Add "Done" badge if all tasks are completed
            if (taskCount > 0 && completedCount === taskCount) {
                const doneBadge = document.createElement('div');
                doneBadge.className = 'done-badge';
                doneBadge.textContent = 'Done';
                projectContainer.appendChild(doneBadge);
            }
        } else {
            // No tasks message
            const noTasks = document.createElement('p');
            noTasks.className = 'task-count';
            noTasks.style.textAlign = 'center';
            noTasks.style.padding = '1rem';
            noTasks.textContent = 'No tasks added yet. Click "Add Task" to create your first task.';
            
            projectContainer.appendChild(noTasks);
        }
        
        // Add project container to tasks list
        tasksList.appendChild(projectContainer);
    });
}

// Open add task modal
function openAddTaskModal(project) {
    const modal = document.getElementById('add-task-modal');
    
    // Set project info
    document.getElementById('task-project-name').textContent = project.name;
    document.getElementById('task-project-id').value = project.id;
    
    // Show modal
    modal.classList.add('active');
}

// Toggle task completion
function toggleTaskCompletion(projectId, taskId) {
    const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
    
    // Find project
    const projectIndex = tasks.findIndex(p => p.projectId === projectId);
    
    if (projectIndex === -1) return;
    
    // Find task
    const taskIndex = tasks[projectIndex].tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) return;
    
    // Toggle completion
    tasks[projectIndex].tasks[taskIndex].completed = !tasks[projectIndex].tasks[taskIndex].completed;
    
    // Save to local storage
    saveData(STORAGE_KEYS.MY_TASKS, tasks);
    
    // Update UI
    renderTasksTab();
    updateTaskStats();
}

// Delete task
function deleteTask(projectId, taskId) {
    const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
    
    // Find project
    const projectIndex = tasks.findIndex(p => p.projectId === projectId);
    
    if (projectIndex === -1) return;
    
    // Find task
    const taskIndex = tasks[projectIndex].tasks.findIndex(t => t.id === taskId);
    
    if (taskIndex === -1) return;
    
    // Remove task
    tasks[projectIndex].tasks.splice(taskIndex, 1);
    
    // If no tasks left, remove project from tasks
    if (tasks[projectIndex].tasks.length === 0) {
        tasks.splice(projectIndex, 1);
    }
    
    // Save to local storage
    saveData(STORAGE_KEYS.MY_TASKS, tasks);
    
    // Update UI
    renderTasksTab();
    updateTaskStats();
}

// Delete transaction
function deleteTransaction(transactionId, transactionType) {
    // Determine storage key based on transaction type
    const storageKey = transactionType === 'investment' ? 
        STORAGE_KEYS.INVESTMENTS : STORAGE_KEYS.EARNINGS;
    
    // Get transactions
    const transactions = getStoredData(storageKey);
    
    // Find transaction
    const transactionIndex = transactions.findIndex(t => t.id === transactionId);
    
    if (transactionIndex === -1) return;
    
    // Remove transaction
    transactions.splice(transactionIndex, 1);
    
    // Save to local storage
    saveData(storageKey, transactions);
    
    // Update UI
    renderInvestmentTab();
    updateProjectStats();
}

// Update project stats
function updateProjectStats() {
    const joinedProjects = getStoredData(STORAGE_KEYS.JOINED_PROJECTS);
    const projects = getStoredData(STORAGE_KEYS.PROJECTS);
    
    // Update joined projects count
    document.querySelector('.joined-projects').textContent = joinedProjects.length;
    document.querySelector('.total-projects').textContent = projects.length;
    
    // Update dashboard stats
    updateDashboardStats();
}

// Update task stats
function updateTaskStats() {
    const tasks = getStoredData(STORAGE_KEYS.MY_TASKS);
    
    // Calculate task stats
    let completedTasks = 0;
    let totalTasks = 0;
    
    tasks.forEach(project => {
        project.tasks.forEach(task => {
            totalTasks++;
            if (task.completed) {
                completedTasks++;
            }
        });
    });
    
    // Update task progress bar
    const progressFill = document.getElementById('task-progress-fill');
    if (progressFill) {
        const progressPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
        progressFill.style.width = `${progressPercentage}%`;
    }
    
    // Update task counts
    document.getElementById('tasks-completed').textContent = completedTasks;
    document.getElementById('tasks-total').textContent = totalTasks;
    document.querySelector('.completed-tasks').textContent = completedTasks;
    document.querySelector('.total-tasks').textContent = totalTasks;
}
