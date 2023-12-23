CARA MENJALANKAN

1. Buat database dengan nama "uts_ra"
2. buka terminal di folder ini dan jalankan
- python -m venv env
- .\env\Scripts\activate
- .\env\Scripts\pip install -r requirements.txt
- .\env\Scripts\alembic upgrade head
- deactivate

3. jalankan grpc server
- cd grpc_server
- python -m venv env
- .\env\Scripts\activate
- .\env\Scripts\pip install -r requirements.txt
- .\env\Scripts\python server.py

4. jalankan pyramid rest dengan cara membuka terminal baru dan arahkan ke folder ini
- cd pyramid_rest
- python -m venv env
- .\env\Scripts\activate
- .\env\Scripts\pip install -e .
- .\env\Scripts\pserv development.ini --reload

5. jalankan frontend dengan cara membuka terminal baru dan arahkan ke folder frontend dan ikuti instruksi di folder tersebut
