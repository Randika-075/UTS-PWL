from pyramid.view import view_config, view_defaults

from pyramid_rest.grpc_client.client import ProductClient

import traceback

import pyramid_rest.grpc_client.product_pb2 as product_pb2


@view_config(route_name="products", renderer="json")
def products_view(request):
    try:
        client = ProductClient()

        products = client.get_products()

        return products
    except Exception as e:
        request.response.status = 500
        return dict(
            status="error",
            message=str(e),
        )


@view_config(route_name="products", renderer="json", request_method="POST")
def create_product_view(request):
    print(request.json_body)
    try:
        if (
            request.json_body is None
            or "name" not in request.json_body
            or "description" not in request.json_body
            or "price" not in request.json_body
            or "image_url" not in request.json_body
            or "stock" not in request.json_body
        ):
            request.response.status = 400
            return dict(
                status="error",
                message="Bad request",
            )

        client = ProductClient()

        product = client.create_product(
            product=product_pb2.Product(
                name=request.json_body["name"],
                description=request.json_body["description"],
                price=request.json_body["price"],
                image_url=request.json_body["image_url"],
                stock=request.json_body["stock"],
            )
        )

        if "error" in product:
            request.response.status = 400
            return dict(
                status="error",
                message=product["error"]["message"],
            )

        return product
    except Exception as e:
        print(traceback.format_exc())

        request.response.status = 500
        return dict(
            status="error",
            message=str(e),
        )


@view_config(route_name="product", renderer="json", request_method="PUT")
def update_product_view(request):
    try:
        if (
            request.json_body is None
            or "name" not in request.json_body
            or "description" not in request.json_body
            or "price" not in request.json_body
            or "image_url" not in request.json_body
            or "stock" not in request.json_body
        ):
            request.response.status = 400
            return dict(
                status="error",
                message="Bad request",
            )

        client = ProductClient()

        product = client.update_product(
            product=product_pb2.Product(
                id=int(request.matchdict["id"]),
                name=request.json_body["name"],
                description=request.json_body["description"],
                price=request.json_body["price"],
                image_url=request.json_body["image_url"],
                stock=request.json_body["stock"],
            )
        )

        if "error" in product:
            request.response.status = 400
            return dict(
                status="error",
                message=product["error"]["message"],
            )

        return product
    except Exception as e:
        request.response.status = 500
        return dict(
            status="error",
            message=str(e),
        )


@view_config(route_name="product", renderer="json", request_method="DELETE")
def delete_product_view(request):
    try:
        client = ProductClient()

        product = client.delete_product(int(request.matchdict["id"]))

        if "error" in product:
            request.response.status = 404
            return dict(
                status="error",
                message=product["error"]["message"],
            )

        return product
    except Exception as e:
        request.response.status = 500
        return dict(
            status="error",
            message=str(e),
        )


@view_config(route_name="product", renderer="json")
def product_view(request):
    try:
        client = ProductClient()

        product = client.get_product(int(request.matchdict["id"]))

        if "error" in product:
            request.response.status = 404
            return dict(
                status="error",
                message=product["error"]["message"],
            )

        return product
    except Exception as e:
        request.response.status = 500
        return dict(
            status="error",
            message=str(e),
        )
