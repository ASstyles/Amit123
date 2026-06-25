/* ==========================================================================
   AMIT KE CIRCUITS - MAIN INDEX CORE HANDLER APPLICATION CONTROLLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Structural DOM Registry Nodes
    const openingScene = document.getElementById("opening-scene");
    const storyModeView = document.getElementById("story-mode-view");
    const quickModeView = document.getElementById("quick-mode-view");
    
    const btnStartJourney = document.getElementById("btn-start-journey");
    const btnQuickConnect = document.getElementById("btn-quick-connect");
    const navQuickToggle = document.getElementById("nav-quick-toggle");
    const btnBackToStory = document.getElementById("back-to-story");
    
    const problemWordsContainer = document.getElementById("problem-words-container");
    const propsGrid = document.getElementById("props-grid");
    const revealOverlay = document.getElementById("reveal-overlay");
    const revealContent = document.getElementById("reveal-content");
    const closeReveal = document.getElementById("close-reveal");
    const guideCardsList = document.getElementById("guide-cards-list");
    const quickMembersList = document.getElementById("quick-members-list");
    const triggerArFlow = document.getElementById("trigger-ar-flow");
    const arFallback = document.getElementById("ar-error-fallback");

    // Initialize Analytics Entry Capture Viewport
    if (typeof logEvent === "function") {
        logEvent("QR Landing View Hit", "Identity Entry Pipeline");
    }

    // Navigation Layer State Management Systems
    function activateStoryMode() {
        openingScene.classList.add("hidden");
        quickModeView.classList.add("hidden");
        storyModeView.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderStoryModeContent();
        logEvent("Story Mode Activated", "Navigation Routing");
    }

    function activateQuickMode() {
        openingScene.classList.add("hidden");
        storyModeView.classList.add("hidden");
        quickModeView.classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderQuickModeContent();
        logEvent("Quick Mode Activated", "Navigation Routing");
    }

    // Click Binder Mappings
    btnStartJourney.addEventListener("click", activateStoryMode);
    btnQuickConnect.addEventListener("click", activateQuickMode);
    navQuickToggle.addEventListener("click", () => {
        if(quickModeView.classList.contains("hidden")) {
            activateQuickMode();
        } else {
            activateStoryMode();
        }
    });
    btnBackToStory.addEventListener("click", activateStoryMode);
    closeReveal.addEventListener("click", () => {
        revealOverlay.classList.add("hidden");
        document.querySelectorAll(".prop-card").forEach(c => c.classList.remove("prop-glow-active"));
    });

    // Content Rendering System Implementation
    function renderStoryModeContent() {
        // Build Setup Problem Words
        if(problemWordsContainer.children.length === 0) {
            const issues = ["Factory", "Lift", "Accounts", "Training", "Wellness", "Gifting", "Vending"];
            issues.forEach((word, idx) => {
                const el = document.createElement("span");
                el.className = "problem-word-glow";
                el.style.animationDelay = `${idx * 0.2}s`;
                el.style.padding = "6px 12px";
                el.style.background = "#1a1a1a";
                el.style.borderRadius = "4px";
                el.style.border = "1px solid #333";
                el.style.fontSize = "0.9rem";
                el.style.fontWeight = "bold";
                el.innerText = word;
                problemWordsContainer.appendChild(el);
            });
        }

        // Build Clickable Map Interactive Node Grid elements
        if(propsGrid.children.length === 0) {
            membersData.forEach(member => {
                const card = document.createElement("div");
                card.className = "prop-card fade-in-up";
                card.style.background = "var(--bg-card)";
                card.style.border = "2px solid #333";
                card.style.borderRadius = "8px";
                card.style.padding = "15px";
                card.style.cursor = "pointer";
                card.style.display = "flex";
                card.style.flexDirection = "column";
                card.style.alignItems = "center";
                card.style.textAlign = "center";
                card.setAttribute("data-id", member.id);
                
                card.innerHTML = `
                    <div style="margin-bottom:10px; color:var(--primary-gold);">${member.iconHtml}</div>
                    <span style="font-family:var(--font-primary); font-size:1.1rem; color:#fff;">${member.propName}</span>
                    <small style="color:var(--primary-yellow); margin-top:4px;">${member.propLabel}</small>
                `;

                card.addEventListener("click", () => handlePropTap(member.id, card));
                propsGrid.appendChild(card);
            });
        }

        // Build Reference Cross Walk Guides Section
        if(guideCardsList.children.length === 0) {
            membersData.forEach(member => {
                const row = document.createElement("div");
                row.style.background = "var(--bg-card-alt)";
                row.style.padding = "15px";
                row.style.borderRadius = "8px";
                row.style.display = "flex";
                row.style.justifyContent = "between";
                row.style.alignItems = "center";
                row.style.borderLeft = "4px solid var(--primary-gold)";
                
                row.innerHTML = `
                    <div style="flex:1;">
                        <strong style="color:#fff; font-size:0.95rem;">${member.propLabel.replace('?','')} Issues</strong>
                        <p style="font-size:0.8rem; color:var(--text-muted);">${member.shortIntro}</p>
                    </div>
                    <a href="member.html?id=${member.id}" class="btn btn-primary" style="width:auto; padding:6px 12px; font-size:0.75rem;">Connect ${member.name.split(' ')[0]}</a>
                `;
                guideCardsList.appendChild(row);
            });
        }
    }

    function handlePropTap(id, element) {
        document.querySelectorAll(".prop-card").forEach(c => c.classList.remove("prop-glow-active"));
        element.classList.add("prop-glow-active");
        
        const member = membersData.find(m => m.id === id);
        if(!member) return;

        logEvent(`Prop Clicked: ${id}`, "Interactive Blueprint Discovery Engine");

        revealContent.innerHTML = `
            <div style="display:flex; align-items:center; gap:15px; margin-bottom:15px;">
                <div style="width:60px; height:60px; border-radius:50%; overflow:hidden; border:2px solid var(--primary-gold);">
                    <img src="${member.photo}" alt="${member.name}" style="width:100%; height:100%; object-fit:cover;">
                </div>
                <div>
                    <h4 style="font-size:1.3rem; margin:0;">${member.name}</h4>
                    <span style="font-size:0.85rem; color:var(--primary-yellow); font-weight:bold;">${member.category}</span>
                </div>
            </div>
            <p style="font-style:italic; font-weight:bold; color:#fff; margin-bottom:10px; border-left:3px solid var(--primary-gold); padding-left:10px;">
                "${member.tagline}"
            </p>
            <p style="font-size:0.9rem; color:var(--text-muted); margin-bottom:15px;">
                <strong>Problem Solved:</strong> ${member.shortIntro}
            </p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <a href="member.html?id=${member.id}" class="btn btn-primary" style="font-size:0.85rem; padding:10px;">Know More</a>
                <a href="https://wa.me/${member.whatsapp}?text=Hi%20${member.name},%20saw%20your%20circuit%20profile" class="btn btn-whatsapp" style="font-size:0.85rem; padding:10px;" target="_blank">WhatsApp</a>
            </div>
        `;
        revealOverlay.classList.remove("hidden");
        revealOverlay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function renderQuickModeContent() {
        if(quickMembersList.children.length === 0) {
            membersData.forEach(member => {
                const card = document.createElement("div");
                card.style.background = "var(--bg-card)";
                card.style.border = "1px solid #333";
                card.style.borderRadius = "8px";
                card.style.padding = "15px";
                card.style.display = "flex";
                card.style.justifyContent = "space-between";
                card.style.alignItems = "center";
                
                card.innerHTML = `
                    <div>
                        <h4 style="margin:0; font-size:1.1rem; color:var(--primary-gold);">${member.name}</h4>
                        <small style="color:var(--text-muted); font-weight:bold;">${member.category}</small>
                    </div>
                    <div style="display:flex; gap:8px;">
                        <a href="tel:${member.phone}" class="btn btn-call" style="width:auto; padding:8px 12px; font-size:0.8rem;">Call</a>
                        <a href="member.html?id=${member.id}" class="btn btn-primary" style="width:auto; padding:8px 12px; font-size:0.8rem;">Profile</a>
                    </div>
                `;
                quickMembersList.appendChild(card);
            });
        }
    }

    // Experimental WebAR Feature Interception Implementation Trigger
    triggerArFlow.addEventListener("click", () => {
        logEvent("AR Activation Attempted", "WebAR Matrix Core");
        arFallback.classList.remove("hidden");
    });
});