# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 AS base
WORKDIR /usr/src/app

COPY . .
RUN bun install
EXPOSE 3000/tcp
ENTRYPOINT ["bun", "run", "index.tsx"]



# run the app
USER bun
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "index.tsx" ]
