.PHONY: all serve
all: src/abcd.png src/abcdSS.png src/thursday.png src/thursdaySS.png src/thursdayTT.png
	mdbook build -d docs

serve:
	mdbook serve -d docs

src/%.png: src/%.gv
	dot -Tpng $< -o $@
