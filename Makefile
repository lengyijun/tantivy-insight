.PHONY: all serve
all:
	mdbook build -d docs

serve:
	mdbook serve -d docs
