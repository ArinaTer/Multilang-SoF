import esbuild from "gulp-esbuild";

export const js = () => {
    return app.gulp
        .src(`${app.path.srcFolder}/assets/js/app.js`, { sourcemaps: app.isDev })
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "JS",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            esbuild({
                bundle: true,
                format: "esm",
                sourcemap: app.isDev,
                minify: app.isBuild,
            })
        )
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browsersync.stream());
};
