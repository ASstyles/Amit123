/* ==========================================================================
   AMIT KE CIRCUITS - MEMBER PROFILE ENGINE LIFECYCLE CONTROLLER
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Resolve Global Parameter Query Address Rules
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get("id");

    // Fallback Redirection logic if missing mapping profile reference target
    if (!memberId) {
        window.location.href = "index.html";
        return;
    }

    const member = membersData.find(m => m.id === memberId.toLowerCase());
    if (!member) {
        window.location.href = "index.html";
        return;
    }

    // Initialize Dedicated Identity Analytics Engine Log
    if (typeof logEvent === "function") {
        logEvent(`Profile Loaded: ${member.id}`, "Member Page Viewport");
    }

    // 2. Hydrate Structural Layout Framework Elements Map
    document.title = `${member.name} | Circuit Profile`;
    document.getElementById("header-member-title").innerHTML = `${member.name.split(' ')[0].toUpperCase()} <span>CIRCUIT</span>`;
    document.getElementById("m-photo").src = member.photo;
    document.getElementById("m-photo").alt = member.name;
    document.getElementById("m-name").innerText = member.name;
    document.getElementById("m-category").innerText = member.category;
    document.getElementById("m-tagline").innerText = `"${member.tagline}"`;
    
    // Video Setup Layer Integration
    const videoNode = document.getElementById("m-video");
    videoNode.src = member.videoUrl;
    videoNode.addEventListener("play", () => logEvent(`Video Played: ${member.id}`, "Media Interaction"));

    // Communication Hyperlink Actions Builders mapping
    const waText = encodeURIComponent(`Hello ${member.name}, I discovered your profile on Amit Ke Circuits. Let's connect.`);
    const waUrl = `https://wa.me/${member.whatsapp}?text=${waText}`;
    
    document.getElementById("link-direct-call").href = `tel:${member.phone}`;
    document.getElementById("link-direct-whatsapp").href = waUrl;
    document.getElementById("link-direct-dan").href = member.danCard;
    
    // Bottom Sticky Control Binding
    document.getElementById("sticky-call").href = `tel:${member.phone}`;
    document.getElementById("sticky-whatsapp").href = waUrl;
    document.getElementById("sticky-dan").href = member.danCard;

    // Direct Trackers Event attachments
    document.getElementById("sticky-call").addEventListener("click", () => logEvent(`Sticky Call Triggered: ${member.id}`, "Conversion Call"));
    document.getElementById("sticky-whatsapp").addEventListener("click", () => logEvent(`Sticky WhatsApp Triggered: ${member.id}`, "Conversion chat"));
    document.getElementById("sticky-dan").addEventListener("click", () => logEvent(`Sticky DAN Profile Triggered: ${member.id}`, "Conversion Card"));

    // 3. Populate Interactive Prop Blocks Accordion Contents Data Core
    document.getElementById("m-prop-problems").innerText = member.shortIntro;
    document.getElementById("m-prop-solutions").innerText = member.seriousPromise;
    
    const refHtml = member.referrals.map(r => `<div style='margin-bottom:6px;'>🎯 ${r}</div>`).join('');
    document.getElementById("m-prop-referrals").innerHTML = refHtml;
    
    document.getElementById("m-prop-resource").innerText = `Complete access checklist framework for: ${member.resourceTitle}`;
    document.getElementById("m-prop-contact").innerHTML = `Email channel: ${member.email}<br>Phone trace sequence: ${member.phone}`;

    // Accordion Interactive Structural Toggle Scripting Logic
    const triggers = document.querySelectorAll(".accordion-trigger");
    triggers.forEach(trigger => {
        trigger.addEventListener("click", function() {
            const content = this.nextElementSibling;
            const sign = this.querySelector("span:last-child");
            
            if(content.classList.contains("hidden")) {
                content.classList.remove("hidden");
                sign.innerText = "-";
                logEvent("Accordion Expanded", "Profile Narrative Exploration");
            } else {
                content.classList.add("hidden");
                sign.innerText = "+";
            }
        });
    });

    // 4. Hydrate Explicit Best vs Not Ideal Listing Columns Rulesets
    const bestContainer = document.getElementById("list-best-referrals");
    member.rightReferrals.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        bestContainer.appendChild(li);
    });

    const badContainer = document.getElementById("list-not-ideal");
    member.notIdeal.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        badContainer.appendChild(li);
    });

    // 5. Hydrate Download Anchor Reference Setup hooks
    document.getElementById("lbl-resource-title").innerText = member.resourceTitle;
    const downloadBtn = document.getElementById("btn-resource-download");
    downloadBtn.addEventListener("click", () => {
        logEvent(`Resource Download Intended: ${member.id}`, "Engagement Asset Delivery");
    });

    // 6. Inject Identity Context Custom Motion FX Scene Modules
    injectCustomEntranceGraphics(member.id);
});

function injectCustomEntranceGraphics(id) {
    const canvas = document.getElementById("entrance-animation-canvas");
    let innerStructure = "";

    switch(id) {
        case "sopan":
            innerStructure = `<div class="anim-blueprint" style="background:#0044aa; color:#fff; padding:10px; border:2px dashed #fff; font-family:monospace; font-size:0.75rem; width:80%;">[ 📐 BLUEPRINT STRUCTURAL TIMELINE LOADING ]</div>`;
            break;
        case "prashant":
            innerStructure = `
                <div style="display:flex; width:60px; height:60px; background:#222; border:2px solid #fff; position:relative;">
                    <div class="lift-door-left" style="width:50%; height:100%; background:var(--primary-gold); border-right:1px solid #000;"></div>
                    <div class="lift-door-right" style="width:50%; height:100%; background:var(--primary-gold); border-left:1px solid #000;"></div>
                </div>
            `;
            break;
        case "prachi":
            innerStructure = `<div style="font-family:monospace; font-size:1.2rem; color:var(--accent-green); font-weight:bold;"><span class="calc-particle">$$$</span> SYSTEM AUDIT BALANCED <span class="calc-particle">$$$</span></div>`;
            break;
        case "amit":
            innerStructure = `<div style="font-family:monospace; color:var(--primary-yellow);" class="fade-in-up">💻 BOOTING LMS OPERATIONAL KERNEL... 100% SUCCESS</div>`;
            break;
        case "tejaswini":
            innerStructure = `<div class="pulse-heart" style="color:var(--accent-red); font-size:3rem;">❤️</div>`;
            break;
        case "shikha":
            innerStructure = `<div style="font-size:2.5rem; transform-origin:center;" class="pulse-cta">🎁</div>`;
            break;
        case "shubham":
            innerStructure = `<div style="font-family:var(--font-primary); color:#fff;" class="fade-in-up">☕ MACHINE DISPENSING INCOME ACTIVE</div>`;
            break;
        default:
            innerStructure = `<div style="color:var(--primary-gold);">⚡ CIRCUITS ENGAGED</div>`;
    }
    canvas.innerHTML = innerStructure;
}