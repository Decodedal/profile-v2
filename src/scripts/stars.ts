class Star {
    // size: number;
    top: number;
    left: number;
    divName:string;

    constructor(top: number, left: number,divName:string) {
        // this.size = size;
        this.top = top;
        this.left = left;
        this.divName = divName;
    }

	createDiv(): HTMLDivElement {
        // Create a new div element
		
        const starDiv = document.createElement('div');

        // Set the class name to 'cloud'
        starDiv.className = 'star hide';

        // Optionally set other styles or properties
        // starDiv.style.transform = `scale(${this.size / 100})`
        // starDiv.style.width = "10px"
        // starDiv.style.height = "10px"
        // starDiv.style.background = "white"
        starDiv.style.position = 'absolute';
        starDiv.style.top = `${this.top}px`;
        starDiv.style.left = `${this.left}px`;
		starDiv.style.animation = `shining ${((Math.random() * 4) + 1).toFixed(1)}s ${((Math.random() * 4) + 1)}s infinite`
		
        // cloudDiv.style.transition = `transform ${this.speed}s linear`;

        // Append the div to the document body or another container
		//const cloudContainer = document.getElementById('cloud-container');
		const cloudContainer = document.querySelector(this.divName);
        if (cloudContainer) {
            cloudContainer.appendChild(starDiv);
        }

		// console.log(cloudDiv)

        return starDiv;
    }

	// animateDiv(cloudDiv: HTMLDivElement): void {
    //     cloudDiv.style.animation = `moveCloud ${this.speed}s linear `;
    // }
}

function createStars(divName:string) {
    const cloudContainer = document.querySelector(divName);
    if (cloudContainer) {
        const containerWidth = cloudContainer.clientWidth;
        const containerHeight = cloudContainer.clientHeight;

        for (let i = 0; i < 100; i++) { // Create 100 stars for example
            const top = Math.floor(Math.random() * containerHeight);
            const left = Math.floor(Math.random() * containerWidth);

            const myStar = new Star(top, left, divName);
            myStar.createDiv();
        }
    }
}


createStars(".sky")
createStars(".sky2")
