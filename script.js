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
        const customFields = document.querySelectorAll('.custom-project-fields');
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
        document.querySelectorAll('.custom-project-fields').forEach(field => field.style.display = 'none');
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
        const customFields = document.querySelectorAll('.custom-project-fields');
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
        document.querySelectorAll('.custom-project-fields').forEach(field => field.style.display = 'none');
        document.getElementById('earning-modal').classList.remove('active');
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
    emptyState.style.display = '
