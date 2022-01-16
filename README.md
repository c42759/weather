![Weather app](https://github.com/c42759/weather/blob/main/screenshots/4%20-%20Cities%20-%20Three%20Cities_.jpg?raw=true)



# TOC

[TOC]

# Challenge

The challenge purpose was the developing a webapp with the following goals:

- [x] User is allowed to add at least 3 cities.
- [x] User should have access to a Chart Bar where can compare temperatures between cities.
- [x] User should have access to a table with:
  - [x] The fields:
    - [x] Name
    - [x] Temperature
    - [x] Sunrise time
    - [x] Sunset time
  - [x] Each column can be able to sort.
- [x] The Backend needs to be developed in Node.js.
- [x] The contact with Public/External API can be only done by the Backend.
- [x] The Frontend can only contact the Backend API of the project.
- [x] All the requests to the Backend API need to be logged into a file.
- [x] Project needs to be versioned using git.
- [ ] All the instructions to run  the project needs to be in the README.



## Work done

Doesn't matter to develop something if is not done properly, what was the steps I take to do this project.

### Technologies Research

The backend tech was already lock by the briefing, so a framework was needed to develop the API. Because  I'm more use to Python API development using **Flask**, **FastAPI** and **Django REST**, I looked for frameworks with feature I like in the ones I use:

- Fast to setup
- Control over URL
- Fast to set status code and payload

I end up with the options **Express.Js** and **Nest.js**, and Express looked a pretty straight option for this.

For frontend I choose **React** for the development and **TailwindCSS** to help implementing my idea, both techs are super easy to configure and Tailwind is now more integrated with React.

### Design Research

I don't want simply implement an ugly app, I like to put that extra effort into developing a good looking software, using as a basis the following mockup image, I use it as guidelines to the design of this small projet.

![Weather app](https://www.fluttercampus.com/img/uploads/web/2021/03/8f53295a73878494e9bc8dd6c3c7104f.webp)

**Source:** [Flutter Weather App](https://github.com/LonelyCpp/flutter_weather)



### Design

After 10 years of experience and 7 of them working with a good list of designers, now I have also experience designing, at least, a simple website or webapp.

Using as software **Figma** as a design software, I was able to design a minimalist webapp with all the features requested, plus a few more.

Click [here](https://www.figma.com/file/YfxQ0sC8jRUSdUHKvnWgtC/GOCONTACT) to check the design.



## How to run: Using Docker

**Requirements:**

- Windows
  - Docker Desktop
- Mac / Linux
  - Docker
  - Docker-compose



**Steps:**

1. Duplicate the file `./.env.sample` and rename the copy to `./.env`.
2. Duplicate the file `./backend/.env.sample` and rename the copy to `./backend/.env`.
3. Edit the file `./backend/.env`  and replace the value of the config `WEATHER_API_KEY` with a valid Open Weather Map API Key.
4. Open the Windows/Mac/Linux Terminal in the Project Path and run `docker-compose`.
5. At this point open the browser and access to http://localhost:8080.



## How to run: Using Node (no Docker)

**Requirements:**

- Windows / Mac / Linux
  - Node 17+



**Steps:**

1. Edit the file `./backend/settings.js` and update the variable value `appId` at line 8 to the with a valid Open Weather Map API Key as a string.
2. Open the Windows/Mac/Linux Terminal in the `./backend` and run `npm install`, following with `npm start`.
3. Open the Windows/Mac/Linux Terminal in the `./frontend` and run `npm install`, following with `npm start`, a browser windows should be atomically open with the address http://localhost:3000.