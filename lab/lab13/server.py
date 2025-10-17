from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi import HTTPException
app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

course_dict = {
    101:["Computer Porg",4,75],
    102:["Meow1",4,80],
    103:["Moew2",4,70],
    201:["Meow3",4,90],
    202:["meow4",4,95],
}

name_dict = {
    1101: "Noxu Nyan"
}

@app.get("/student/", response_class=HTMLResponse)
async def read_index(id: int, request: Request):
    if id not in name_dict.keys():
        raise HTTPException(404, detail="Id not found")
    return templates.TemplateResponse(
        "report.html", 
        {"request": request, "user": {"id": id, "name": name_dict[id]}, "courses": course_dict}
    )
