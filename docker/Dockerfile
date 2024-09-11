FROM ubuntu:24.04 AS builder

WORKDIR /app/

# Install necessary runtime dependencies (if any)
RUN apt-get update -y && echo 1 | echo 1 |apt-get install -y nodejs npm 
RUN npm install --global yarn pkg

# Copy the source code into the container
COPY . .

RUN yarn pkg_init_soon


FROM debian:bookworm-slim

# Copy entrypoint 
COPY --from=builder /app/bin/init_soon /app/soon/bin/init_soon
COPY --from=builder /app/docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /app/soon/bin/init_soon
RUN chmod +x /entrypoint.sh

# Set the working directory
WORKDIR /app/soon/


# Set the environment variables
ENV PATH="/app/soon/bin/:${PATH}"


# Set the entry point to the binary
ENTRYPOINT ["/entrypoint.sh"]
