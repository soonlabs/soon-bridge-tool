FROM ubuntu:24.04

WORKDIR /app/soon-bridge-tool

#install nodejs and npm
RUN apt-get update -y && echo 1 | echo 1 |apt-get install -y nodejs npm 
RUN npm install --global yarn pkg typescript

#install solana tools
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && . "$HOME/.cargo/env"
RUN sh -c "$(curl -sSfL https://release.anza.xyz/v1.18.18/install)"
ENV PATH="$HOME/.local/share/solana/install/active_release/bin:$PATH"


COPY . .

RUN npm install
RUN yarn 

# Copy entrypoint 


# Set the entry point to the binary
ENTRYPOINT ["/app/soon-bridge-tool/docker/entrypoint.sh"]
