FROM node:14.16.0-alpine3.10

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /code

# add `/app/node_modules/.bin` to $PATH
ENV PATH /code/node_modules/.bin:$PATH

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# start app
CMD ["npm", "start"]

EXPOSE 3000
