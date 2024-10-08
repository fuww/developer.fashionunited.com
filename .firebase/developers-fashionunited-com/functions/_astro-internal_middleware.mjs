import 'es-module-lexer';
import './chunks/astro-designed-error-pages_ErUf1VXh.mjs';
import '@astrojs/internal-helpers/path';
import 'cookie';
import { d as defineMiddleware, s as sequence } from './chunks/index_DhI8vesJ.mjs';
import { u as useTranslations } from './chunks/translations_C4RDDBZ4.mjs';

const onRequest$1 = defineMiddleware((context, next) => {
  context.locals.t = useTranslations(context.currentLocale);
  return next();
});

const onRequest = sequence(
	onRequest$1,
	
	
);

export { onRequest };
