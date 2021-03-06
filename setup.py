from setuptools import setup, find_packages

setup(
    name = "stellarisfiles",
    version = "0.0.0",
    author = "Oliver Barnum",
    author_email = "oliverbarnum32@gmail.com",
    description = "Creates a ui to view Stellaris event information",
    url = "",
    packages=find_packages(),
    install_requires=["click", "ensure", "luaparser", "PyYAML", "lark-parser"],
    script=["backend/main.py"]
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: GNU General Public License v3 (GPLv3)",
        "Operating System :: OS Independent",
    ],
    python_requires=">=3",
)