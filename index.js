async function holdup()
{
    await new Promise(resolve => setTimeout(resolve, 1000));

    Vue.component('content-segment', {
        props: ['segment'],
        template: `
        <div class="content">
            <p class="h5">
                {{ segment.heading }}
            </p>
            <p class="category">
                {{ segment.subheading }}
            </p>
            <!-- Image sourced from pixabay.com -->
            <img :src="segment.img" class="img-fluid" />
            <p class="content-description">
                {{ segment.description }}
            </p>
            <div class="content-footer">
                <p class="float-left">
                    {{ segment.date }}
                </p>
                <p class="float-right">
                    <a :href="segment.link">
                        <img src="images/NavigationIcon_Volunteer.png" class="icon-tiny" /> Learn More
                    </a>
                </p>
            </div>
        </div>
        `
    });

    new Vue({
        el: "#contents",
        data: {
            segments: [
                {
                    heading: "Clean Up Elementary Campus",
                    subheading: "Education, Environment",
                    img: "images/volunteer.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: "May 11-12, 2019",
                    link: "#",
                },
                {
                    heading: "Plant a Tree Day",
                    subheading: "Education, Environment",
                    img: "images/tree.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: "May 22-23, 2019",
                    link: "#",
                },
                {
                    heading: "Clean up the River",
                    subheading: "Environment",
                    img: "images/river.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: "May 31, 2019",
                    link: "#",
                },
                {
                    heading: "Meals under the Bridge",
                    subheading: "Social, Hunger",
                    img: "images/bridge.jpg",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    date: "June 1, 2019",
                    link: "#",
                },
            ]
        }
    });
}

holdup();