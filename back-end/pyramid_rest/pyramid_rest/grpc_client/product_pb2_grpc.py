# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

import pyramid_rest.grpc_client.product_pb2 as product__pb2


class ProductServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.List = channel.unary_unary(
            "/product.ProductService/List",
            request_serializer=product__pb2.ProductListRequest.SerializeToString,
            response_deserializer=product__pb2.ProductListResponse.FromString,
        )
        self.Get = channel.unary_unary(
            "/product.ProductService/Get",
            request_serializer=product__pb2.ProductRequest.SerializeToString,
            response_deserializer=product__pb2.ProductResponse.FromString,
        )
        self.Create = channel.unary_unary(
            "/product.ProductService/Create",
            request_serializer=product__pb2.ProductCreateRequest.SerializeToString,
            response_deserializer=product__pb2.ProductCreateResponse.FromString,
        )
        self.Update = channel.unary_unary(
            "/product.ProductService/Update",
            request_serializer=product__pb2.ProductUpdateRequest.SerializeToString,
            response_deserializer=product__pb2.ProductUpdateResponse.FromString,
        )
        self.Delete = channel.unary_unary(
            "/product.ProductService/Delete",
            request_serializer=product__pb2.ProductDeleteRequest.SerializeToString,
            response_deserializer=product__pb2.ProductDeleteResponse.FromString,
        )


class ProductServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def List(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def Get(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def Create(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def Update(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")

    def Delete(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details("Method not implemented!")
        raise NotImplementedError("Method not implemented!")


def add_ProductServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
        "List": grpc.unary_unary_rpc_method_handler(
            servicer.List,
            request_deserializer=product__pb2.ProductListRequest.FromString,
            response_serializer=product__pb2.ProductListResponse.SerializeToString,
        ),
        "Get": grpc.unary_unary_rpc_method_handler(
            servicer.Get,
            request_deserializer=product__pb2.ProductRequest.FromString,
            response_serializer=product__pb2.ProductResponse.SerializeToString,
        ),
        "Create": grpc.unary_unary_rpc_method_handler(
            servicer.Create,
            request_deserializer=product__pb2.ProductCreateRequest.FromString,
            response_serializer=product__pb2.ProductCreateResponse.SerializeToString,
        ),
        "Update": grpc.unary_unary_rpc_method_handler(
            servicer.Update,
            request_deserializer=product__pb2.ProductUpdateRequest.FromString,
            response_serializer=product__pb2.ProductUpdateResponse.SerializeToString,
        ),
        "Delete": grpc.unary_unary_rpc_method_handler(
            servicer.Delete,
            request_deserializer=product__pb2.ProductDeleteRequest.FromString,
            response_serializer=product__pb2.ProductDeleteResponse.SerializeToString,
        ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
        "product.ProductService", rpc_method_handlers
    )
    server.add_generic_rpc_handlers((generic_handler,))


# This class is part of an EXPERIMENTAL API.
class ProductService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def List(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/product.ProductService/List",
            product__pb2.ProductListRequest.SerializeToString,
            product__pb2.ProductListResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def Get(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/product.ProductService/Get",
            product__pb2.ProductRequest.SerializeToString,
            product__pb2.ProductResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def Create(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/product.ProductService/Create",
            product__pb2.ProductCreateRequest.SerializeToString,
            product__pb2.ProductCreateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def Update(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/product.ProductService/Update",
            product__pb2.ProductUpdateRequest.SerializeToString,
            product__pb2.ProductUpdateResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )

    @staticmethod
    def Delete(
        request,
        target,
        options=(),
        channel_credentials=None,
        call_credentials=None,
        insecure=False,
        compression=None,
        wait_for_ready=None,
        timeout=None,
        metadata=None,
    ):
        return grpc.experimental.unary_unary(
            request,
            target,
            "/product.ProductService/Delete",
            product__pb2.ProductDeleteRequest.SerializeToString,
            product__pb2.ProductDeleteResponse.FromString,
            options,
            channel_credentials,
            insecure,
            call_credentials,
            compression,
            wait_for_ready,
            timeout,
            metadata,
        )
