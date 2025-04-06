export const copy = () => {
  return app.gulp
    .src([
      app.path.src.files,
      app.path.src.locales
    ])
    .pipe(app.gulp.dest((file) => {
      if (file.base.includes("locales")) {
        return app.path.build.locales;
      }
      return app.path.build.files;
    }))
    .pipe(app.plugins.browsersync.stream());
};
