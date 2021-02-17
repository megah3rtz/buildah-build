// This file was auto-generated by action-io-generator. Do not edit by hand!
export enum Inputs {
    /**
     * Architecture(s) to build the image(s) for. For multiple architectures,
     * separate by a comma.
     * Required: false
     * Default: "amd64"
     */
    ARCHS = "archs",
    /**
     * The base image to use to create a new container image
     * Required: true
     * Default: None.
     */
    BASE_IMAGE = "base-image",
    /**
     * List of --build-args to pass to buildah
     * Required: false
     * Default: None.
     */
    BUILD_ARGS = "build-args",
    /**
     * List of files/directories to copy inside the base image
     * Required: false
     * Default: None.
     */
    CONTENT = "content",
    /**
     * Path of the directory to use as context (default: .)
     * Required: false
     * Default: "."
     */
    CONTEXT = "context",
    /**
     * List of Dockerfile paths (eg: ./Dockerfile)
     * Required: false
     * Default: None.
     */
    DOCKERFILES = "dockerfiles",
    /**
     * The entry point to set for containers based on image
     * Required: false
     * Default: None.
     */
    ENTRYPOINT = "entrypoint",
    /**
     * List of environment variables to be set when running containers based on image
     * Required: false
     * Default: None.
     */
    ENVS = "envs",
    /**
     * The name (reference) of the image to build
     * Required: true
     * Default: None.
     */
    IMAGE = "image",
    /**
     * Set to true to build using the OCI image format instead of the Docker image format
     * Required: false
     * Default: "false"
     */
    OCI = "oci",
    /**
     * The port to expose when running containers based on image
     * Required: false
     * Default: None.
     */
    PORT = "port",
    /**
     * The tags of the image to build. For multiple tags, seperate by a space. For example, "latest v1".
     * Required: false
     * Default: "latest"
     */
    TAGS = "tags",
    /**
     * The working directory to use within the container
     * Required: false
     * Default: None.
     */
    WORKDIR = "workdir",
}

export enum Outputs {
    /**
     * Name of the image built
     * Required: false
     * Default: None.
     */
    IMAGE = "image",
    /**
     * List of the tags that were created, separated by spaces
     * Required: false
     * Default: None.
     */
    TAGS = "tags",
}
