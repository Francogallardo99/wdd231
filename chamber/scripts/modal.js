const open_buttons = document.querySelectorAll(".learn-more-btn"); 
const member_description = document.querySelector("#member_description"); 
const close_modal = document.querySelector("#close_modal");
const dialogContent = document.getElementById("dialog-content");

export const membershipData = [
    {
        title: 'Non Profit',
        description: 'Basic Networking: Invitation to 2 free events per year. <br> Resources: Access to a library of documents and templates. <br> Listing: Basic listing in the online directory (without logo).',
        price: '$0'
    },
    {
        title: 'Bronze Membership',
        description: 'All NP benefits <br>PLUS: Directory: Listing with Logo and Description in the online directory. <br> Events: 15% discount on tickets for all events and workshops.<br>  Advertising: Opportunity to publish 1 announcement in the monthly newsletter.',
        price: '$15'

    },
    {
        title: 'Silver Membership',
        description: 'All Bronze benefits. <br>PLUS: Consultation: 1 personalized mentorship session per year with a Chamber expert. <br> Visibility: Featured inclusion in the "New Members" section of the website and social media. <br> Events: 30% discount on events and priority access to speed networking.',
        price: '$30'
    },
    {
        title: 'Gold Membership',
        description: 'All Silver benefits. <br>PLUS: Exclusive Access: Invitation to 4 high-level Executive Dinners (CEO and Leaders). <br> Branding: Mention as a Sponsoring Member on the main page of the website. <br> Training: Free access to one specialized course or certification per year.<br>  Voice and Vote: Seat on a Chamber committee or access to leadership groups.',
        price: '$40'
    }
];


export function showCourseDetailsInDialog(membership) {
    if (!member_description || !dialogContent || !membership) {
        console.error("Error");
        return; 
    }
    
    dialogContent.innerHTML = "";
    
    const title = document.createElement("h2");
    title.textContent = membership.title; 
    
    const description = document.createElement("p");
    description.innerHTML = membership.description;

    const price = document.createElement("p");
    price.innerHTML = `<strong>Price: </strong> ${membership.price}`;
    
    dialogContent.appendChild(title);
    dialogContent.appendChild(description);
    dialogContent.appendChild(price); 
    
    member_description.showModal();
}

open_buttons.forEach(button => {
    button.addEventListener("click", () => {
        const index = button.dataset.index;
        
        const selectedMembership = membershipData[index];
        
        showCourseDetailsInDialog(selectedMembership);
    });
});

if (close_modal && member_description) { 
    close_modal.addEventListener("click" , () => {
        member_description.close();
    });
}