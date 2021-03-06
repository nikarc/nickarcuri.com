FROM gatsbyjs/gatsby:onbuild as build
WORKDIR /app

FROM gatsby/gatsby
COPY --from=build /app/public /pub
